import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = scree.getByText(/learn react/i);
    expert(linkElement).toBeInTheDocument();

});