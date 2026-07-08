const Footer = () => {
  return (
   <footer className="border-t border-slate-700 mt-8 py-6 px-6 md:px-20 lg:px-40 text-center">
  <div className="flex flex-col md:flex-row md:justify-center md:gap-1">
    <p className="text-sm text-slate-400">
      © {new Date().getFullYear()} Ratan Kumar.
    </p>
    <p className="text-sm text-slate-400">
      Made with 💙 and lots of diet coke.
    </p>
  </div>
</footer>
  );
};

export default Footer;