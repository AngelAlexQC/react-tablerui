import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonType } from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <Button type={ButtonType.primary} disabled={true}>
        Hello world!
      </Button>,
    );
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });

  test('Check if the button is disabled', () => {
    render(
      <Button type={ButtonType.secondary} disabled={true}>
        Hello world!
      </Button>,
    );
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Check onClick function', () => {
    const onClick = jest.fn();
    render(
      <Button type={ButtonType.primary} onClick={onClick}>
        Hello world!
      </Button>,
    );
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });
});
