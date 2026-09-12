"use client";

export function DotGridSpotlight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="mesh-gradient" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay noise" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, black 95%)",
        }}
      />

      <div className="relative z-10">{children}</div>

      <style jsx>{`
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(at 15% 15%, rgba(139, 92, 246, 0.6) 0px, transparent 50%),
      radial-gradient(at 85% 10%, rgba(59, 130, 246, 0.55) 0px, transparent 50%),
      radial-gradient(at 10% 85%, rgba(236, 72, 153, 0.5) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgba(16, 185, 129, 0.5) 0px, transparent 50%),
      radial-gradient(at 50% 50%, rgba(99, 102, 241, 0.4) 0px, transparent 60%),
      radial-gradient(at 65% 30%, rgba(251, 146, 60, 0.4) 0px, transparent 50%),
      radial-gradient(at 30% 65%, rgba(250, 204, 21, 0.3) 0px, transparent 50%);
    filter: blur(50px);
    background-size: 200% 200%;
    animation: meshMove 12s ease-in-out infinite;
  }

  @keyframes meshMove {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 60% 30%;
    }
    50% {
      background-position: 100% 70%;
    }
    75% {
      background-position: 30% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`}</style>
        
    </div>
  );
}