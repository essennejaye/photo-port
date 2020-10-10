import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact componet', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
    it('render', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    });
    it('render', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
    });
})