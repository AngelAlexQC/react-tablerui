import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonType } from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button content="Hello world!" type={ButtonType.primary} />);
  });

  test('Check if the button is disabled', () => {
    render(
      <Button
        content="Hello world!"
        type={ButtonType.secondary}
        disabled={true}
      />,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Check onClick function', () => {
    const onClick = jest.fn();
    render(
      <Button
        content="Hello world!"
        type={ButtonType.primary}
        onClick={onClick}
      />,
    );
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });
});
