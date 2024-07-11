// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders App component', () => {
  render(<App />);
  
  // Cek apakah logo Vite ada
  const viteLogo = screen.getByAltText('Vite logo');
  expect(viteLogo).toBeInTheDocument();

  // Cek apakah logo React ada
  const reactLogo = screen.getByAltText('React logo');
  expect(reactLogo).toBeInTheDocument();

  // Cek apakah judul "Vite + React" ada
  const title = screen.getByText('Vite + React');
  expect(title).toBeInTheDocument();

  // Cek apakah tombol "count is 0" ada
  const countButton = screen.getByText('count is 0');
  expect(countButton).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<App />);
  
  // Ambil tombol count
  const countButton = screen.getByText('count is 0');

  // Klik tombol untuk mengubah nilai count
  fireEvent.click(countButton);

  // Verifikasi bahwa nilai count telah bertambah
  expect(screen.getByText('count is 1')).toBeInTheDocument();
});
