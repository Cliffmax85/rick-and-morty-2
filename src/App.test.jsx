import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import App from './App';

it('should get a list of rick and morty characters', async () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

    const loading = screen.getByText(/Loading/i);
    await waitForElementToBeRemoved(loading);
    await screen.findByText('Morty Smith');

})

it('should test initial entries', async () => {
    render(
      <MemoryRouter
        initialEntries={['/1', '/2', '/3']}
        initialIndex = {2}
      >
        <App />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(screen.getByText(/Loading the Characters/i));
  
    const summer = await screen.findByText('Alan Rails');
    expect(summer).toBeInTheDocument();
  })