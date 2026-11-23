'use client';
import Button, { type ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

export default function LinkButton(props: Omit<ButtonProps<typeof Link>, 'component'>) {
  return <Button component={Link} {...props} />;
}
