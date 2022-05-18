import React from 'react';
import { FunctionComponent } from 'react';
import { MouseEventHandler, ReactNode } from 'react';
import '@tabler/core/dist/css/tabler.min.css';
export enum ButtonType {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  warning = 'btn-warning',
  danger = 'btn-danger',
  info = 'btn-info',
  light = 'btn-light',
  dark = 'btn-dark',
  blue = 'btn-blue',
  azure = 'btn-azure',
  indigo = 'btn-indigo',
  purple = 'btn-purple',
  pink = 'btn-pink',
  red = 'btn-red',
  orange = 'btn-orange',
  yellow = 'btn-yellow',
  lime = 'btn-lime',
  green = 'btn-green',
  teal = 'btn-teal',
  cyan = 'btn-cyan',
  facebook = 'btn-facebook',
  twitter = 'btn-twitter',
  google = 'btn-google',
  youtube = 'btn-youtube',
  vimeo = 'btn-vimeo',
  dribbble = 'btn-dribbble',
  github = 'btn-github',
  instagram = 'btn-instagram',
  pinterest = 'btn-pinterest',
  vk = 'btn-vk',
  rss = 'btn-rss',
  flickr = 'btn-flickr',
  bitbucket = 'btn-bitbucket',
  tabler = 'btn-tabler',
}
export enum ButtonSize {
  small = 'btn-sm',
  medium = '',
  large = 'btn-lg',
}
export enum ButtonVariant {
  square = 'btn-square',
  pill = 'btn-pill',
}

export interface ButtonProps {
  content: ReactNode;
  type: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  active?: boolean;
  disabled?: boolean;
  isGhost?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({
  content,
  type,
  size,
  variant,
  active,
  disabled,
  isGhost,
  onClick,
}) => {
  return (
    <button
      className={`btn${type ? ` ${type}` : ''}${size ? ` ${size}` : ''}${
        variant ? ` ${variant}` : ''
      }${active ? ' active' : ''}${disabled ? ' disabled' : ''}${
        isGhost ? ' btn-ghost' : ''
      }`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
