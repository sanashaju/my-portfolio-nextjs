// src/sections/AboutMe.tsx

const AboutMe = () => {
  return (
    <section className="py-12">

      {/* =========================
         SECTION TITLE
      ========================= */}

      <div className="mb-8">
        <h2 className="text-4xl font-black lowercase tracking-tight text-[var(--color-accent)] md:text-5xl">
          about.
        </h2>
      </div>

      {/* =========================
         MAIN CARD
      ========================= */}

      <div className="grid overflow-hidden rounded-[36px] border border-[var(--color-border-main)] bg-[var(--color-bg-elevated)] lg:grid-cols-2">

        {/* =========================
           LEFT SIDE - IMAGE
        ========================= */}

        <div className="flex items-center justify-center border-b border-[var(--color-border-main)] p-8 lg:border-b-0 lg:border-r">

          <div className="group overflow-hidden rounded-[28px] border border-[var(--color-border-main)]">

            <img
              src="/profile.jpg"
              alt="Sana Illikkal"
              className="h-[500px] w-[360px] object-cover transition duration-500 group-hover:scale-105"
            />

          </div>
        </div>

        {/* =========================
           RIGHT SIDE - CONTENT
        ========================= */}

        <div className="flex flex-col justify-center p-8 md:p-12">

          <span className="mb-5 w-fit rounded-full border border-[var(--color-border-main)] bg-[var(--color-accent-soft)] px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
            Full Stack Developer
          </span>

          <h3 className="mb-3 text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            Sana Illikkal
          </h3>

          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
            MERN STACK DEVELOPER
          </p>

          <p className="mb-8 max-w-2xl text-lg leading-9 text-[var(--color-text-secondary)]">
            Hi, I'm Sana Illikkal — a passionate Full Stack Developer
            specializing in the MERN stack, building scalable,
            modern, and visually engaging web applications.
            I enjoy creating responsive frontend experiences
            combined with strong backend architecture.
          </p>

          {/* =========================
             INFO CARDS
          ========================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-[var(--color-border-main)] bg-[rgba(0,217,255,0.03)] p-5">

              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Availability
              </p>

              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                Open to Work & Freelance
              </h4>

            </div>

            <div className="rounded-2xl border border-[var(--color-border-main)] bg-[rgba(0,217,255,0.03)] p-5">

              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Specialty
              </p>

              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                MERN Stack Applications
              </h4>

            </div>

            <div className="rounded-2xl border border-[var(--color-border-main)] bg-[rgba(0,217,255,0.03)] p-5 sm:col-span-2">

              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Location
              </p>

              <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                Thrissur, Kerala, India
              </h4>

            </div>

          </div>

          {/* =========================
             SKILLS
          ========================= */}

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="pill-accent">React</span>
            <span className="pill-accent">TypeScript</span>
            <span className="pill-accent">Node.js</span>
            <span className="pill-accent">Express.js</span>
            <span className="pill-accent">MongoDB</span>
            <span className="pill-accent">Tailwind CSS</span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
