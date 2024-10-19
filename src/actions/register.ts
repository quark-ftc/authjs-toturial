'use server';
import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import { error } from 'console';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/services/user';

import bcrypt from 'bcryptjs';
import { get } from 'http';
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Invalid Email or Password',
    };
  }

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: 'Email already in use',
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    success: 'User Created',
  };
};
