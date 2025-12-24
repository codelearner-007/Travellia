export default function ContentLayoutWrapper({ children, className }) {
  return (
    <div
      className={`w-full md:w-[90vw] lg:w-[80vw] xl:w-[60vw] mx-auto p-4 ${className}`}
    >
      {children}
    </div>
  );
}
