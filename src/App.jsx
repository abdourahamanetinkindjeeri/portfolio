import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRouter from './routes/AppRouter';
import Header from './layout/Header';
import './styles/App.css'


export default function App() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <main className="container flex-grow-1 py-4">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
