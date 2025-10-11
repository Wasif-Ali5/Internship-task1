export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 p-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Student Management System
      </div>
    </footer>
  );
}
