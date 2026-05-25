import { Container } from './components/Container';
import { CountrySection } from './components/CountrySection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TextSection } from './components/TextSection';

function App() {
	return (
		<Container>
			<Header />
			<TextSection />
			<main className="flex-1 overflow-y-auto">
				<CountrySection />
			</main>
			<Footer />
		</Container>
	);
}

export default App;
