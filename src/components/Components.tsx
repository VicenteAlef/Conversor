export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[var(--cardBackground)] rounded-md p-5 mb-10">
      {children}
    </div>
  );
};

export const Label = ({ children }: { children: string }) => {
  return (
    <label className="block text-[var(--text)] font-medium mb-2">
      {children}
    </label>
  );
};

export const Title = ({ children }: { children: string }) => {
  return (
    <h1 className="text-5xl font-bold text-[var(--text)] mb-10">{children}</h1>
  );
};
