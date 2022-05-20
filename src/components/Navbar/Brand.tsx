import React, {
  ComponentPropsWithoutRef,
  HtmlHTMLAttributes,
  PropsWithChildren,
} from 'react';

export type BrandProps = ComponentPropsWithoutRef<'h1'> & {
  imgUrl?: string;
  href?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Brand = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<BrandProps>
>(
  (
    {
      imgUrl = 'https://preview.tabler.io/static/logo.svg',
      href = '/',
      width = 110,
      height = 32,
      alt = 'React TablerUI',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <h1
        className={`navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 ${className}`}
        ref={ref}
        {...props}
      >
        <a href={href}>
          <img
            src={imgUrl}
            width={width}
            height={height}
            alt={alt}
            className="navbar-brand-image"
          />
        </a>
      </h1>
    );
  },
);

export default Brand;
