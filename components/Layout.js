export default function Layout({ children }) {
    return (
      <div>
        <header className="bg-primary text-white p-3 text-center">
          <h1>SoftSell</h1>
        </header>
        <main>{children}</main>
        <footer className="text-center p-3 bg-light mt-5">© 2025 SoftSell</footer>
      </div>
    );
  }
  