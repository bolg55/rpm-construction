import { cn } from '@/utils/cn';
import React from 'react';

interface Props {
  href: string;
  size?: 'md' | 'lg';
  block?: boolean;
  style?: 'primary' | 'secondary' | 'plain' | 'animated';
  class?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const Link = ({
  children,
  href,
  block,
  size = 'lg',
  style = 'plain',
  class: className,
  isExternal,
  ...rest
}: Props) => {
  const sizes = {
    lg: 'px-5 py-2.5',
    md: 'px-4 py-2',
  };

  const styles = {
    primary:
      'sm:inline-block text-center w-full block font-semibold relative py-2 px-5 uppercase border-2 border-border cursor-pointer transition-shadow duration-300 ease-in-out shadow-[5px_5px_0_0] shadow-border text-sm lg:text-base bg-accent text-primary hover:shadow-none',
    secondary:
      'sm:inline-block text-center w-full block font-semibold relative py-2 px-5 uppercase border-2 border-border cursor-pointer transition-shadow duration-300 ease-in-out shadow-[5px_5px_0_0] shadow-border text-sm lg:text-base bg-white text-primary hover:shadow-none',
    plain:
      'text-primary hover:text-accent transition-all duration-200 ease-in-out',
    animated:
      'p-3 mx-4 sm:mx-0 relative before:ease-linear block sm:inline-block text-white bg-accent border md:border-2 uppercase font-semibold sm:p-4 before:absolute border-white before:top-0 before:left-0 transition-all before:origin-left hover:before:bg-white before:bottom-0 before:right-0 before:-z-10 before:bg-accent before:transition-all before:scale-x-0 hover:before:scale-x-100 z-10 tracking-wider text-sm sm:text-base mt-7 hover:text-primary ease-linear sm:w-fit px-7 sm:px-12 md:px-20',
  };

  const combinedClassName = cn(
    block && 'w-full',
    sizes[size],
    styles[style],
    className
  );

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      {...rest}
      className={combinedClassName}
    >
      {children}
    </a>
  );
};

export default Link;
