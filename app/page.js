export default function Page() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #FFFCFB; color: #163459; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
      `}</style>

      <a
        href="#apply"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#2C59A5',
          color: '#FFFCFB',
          padding: '12px 20px',
          borderRadius: '999px',
          fontWeight: 600,
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          zIndex: 1000,
        }}
      >
        Apply Now
      </a>

      <main style={{ minHeight: '100vh', backgroundColor: '#FFFCFB', color: '#163459' }}>
        <section
          style={{
            background: 'linear-gradient(135deg, #163459, #2C59A5)',
            color: '#FFFCFB',
            padding: '80px 24px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={{ marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.85 }}>
                Leelyn Management × FrontSeat
              </p>

              <h1 style={{ margin: '0 0 24px', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
                Bus and truck driver opportunities in Germany
              </h1>

              <p style={{ margin: '0 0 32px', maxWidth: '700px', fontSize: '20px', lineHeight: 1.6, opacity: 0.92 }}>
                Apply for international driving opportunities in Germany through the Leelyn Management and FrontSeat partnership.
                This page is designed to help qualified South African drivers apply quickly and easily.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#apply"
                  style={{
                    backgroundColor: '#FFFCFB',
                    color: '#163459',
                    padding: '14px 24px',
                    borderRadius: '16px',
                    fontWeight: 600,
                  }}
                >
                  Apply Now
                </a>

                <a
                  href="#requirements"
                  style={{
                    border: '1px solid #FFFCFB',
                    color: '#FFFCFB',
                    padding: '14px 24px',
                    borderRadius: '16px',
                    fontWeight: 600,
                  }}
                >
                  View Requirements
                </a>
              </div>
            </div>

            <div style={{ borderRadius: '32px', padding: '32px', backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '16px' }}>
                {[
                  ['Roles', '2 pathways', 'Bus driver and truck driver'],
                  ['Location', 'Germany', 'International employment pathway'],
                  ['Process', 'Screening-led', 'Application and review'],
                  ['Partners', 'Leelyn + FrontSeat', 'Recruitment collaboration'],
                ].map(([label, value, note]) => (
                  <div key={label} style={{ borderRadius: '20px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.10)' }}>
                    <p style={{ fontSize: '14px', margin: '0 0 8px' }}>{label}</p>
                    <p style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px' }}>{value}</p>
                    <p style={{ fontSize: '14px', margin: 0 }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Why build your driving career in Germany?</h2>
            <p style={{ opacity: 0.8 }}>
              Germany offers strong worker protections, reliable income, and excellent social benefits for employees and their families.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {[
              ['Social security', 'Pension, unemployment benefits and medical insurance'],
              ['Family support', 'Family reunion, parental leave and child benefits'],
              ['Education', 'Free schools and universities for children'],
              ['Healthcare', 'Access to a strong public healthcare system'],
              ['Work-life balance', 'Paid vacation and regulated working hours'],
            ].map(([title, text]) => (
              <div key={title} style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
                <h3 style={{ color: '#2C59A5', marginBottom: '8px' }}>{title}</h3>
                <p style={{ opacity: 0.8 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F7FB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Sample driver salary</h2>
              <p style={{ opacity: 0.8 }}>A typical monthly salary example for a bus driver in Niedersachsen (Lower Saxony).</p>
            </div>

            <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {[
                ['Gross income', '€3,265', 'per month'],
                ['Estimated net income', '€2,191', 'single person example'],
                ['Estimated net income', '€2,483', 'family scenario'],
              ].map(([label, amount, note]) => (
                <div key={amount} style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px', textAlign: 'center', background: '#FFFCFB' }}>
                  <p style={{ color: '#2C59A5', fontSize: '14px' }}>{label}</p>
                  <p style={{ fontSize: '40px', fontWeight: 700, margin: '8px 0' }}>{amount}</p>
                  <p style={{ opacity: 0.7 }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Your journey to driving in Germany</h2>
          </div>

          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {['Apply online', 'Assessment centre', 'German language training', 'Relocate to Germany', 'Start driving'].map((step) => (
              <div key={step} style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
                <p style={{ fontWeight: 600 }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F7FB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Support throughout your journey</h2>
              <p style={{ opacity: 0.8 }}>Drivers receive support from selection through relocation and settling in Germany.</p>
            </div>

            <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {[
                'German language training and intercultural preparation',
                'Preparation for driver qualification tests',
                'Visa and work permit support',
                'Temporary accommodation assistance',
                'Bank account and registration assistance',
                'Health insurance and family reunion guidance',
              ].map((item) => (
                <div key={item} style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px', background: '#FFFCFB' }}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Future employers in Germany</h2>
            <p style={{ opacity: 0.8 }}>Drivers will be placed with established public transport and mobility companies in Lower Saxony.</p>
          </div>

          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              'KVG Braunschweig',
              'AllerBus',
              'Stadtbus Goslar',
              'GöVB Göttingen',
              'Bentheimer Eisenbahn',
              'VGH Verkehrsbetriebe',
              'SVHI',
              'Additional regional transport partners',
            ].map((item) => (
              <div key={item} style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
                <p style={{ fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F7FB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Is this opportunity right for you?</h2>
              <p style={{ opacity: 0.8 }}>
                This programme is designed for experienced drivers who are serious about building a long-term career in Germany.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '32px', background: '#FFFCFB' }}>
                <h3 style={{ color: '#2C59A5', marginBottom: '16px' }}>Good fit for this opportunity</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Professional bus or truck driving experience</li>
                  <li>Valid licence and clean driving record</li>
                  <li>Willing to relocate to Germany</li>
                  <li>Committed to learning German</li>
                  <li>Looking for a long-term international career</li>
                </ul>
              </div>

              <div style={{ border: '1px solid #E5E7EB', borderRadius: '20px', padding: '32px', background: '#FFFCFB' }}>
                <h3 style={{ color: '#2C59A5', marginBottom: '16px' }}>This may not be the right fit if</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>You are not willing to relocate internationally</li>
                  <li>You are unable to commit to training requirements</li>
                  <li>You do not currently have professional driving experience</li>
                  <li>You are looking for short-term work only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="requirements" style={{ backgroundColor: '#F5F7FB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
            <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
              <p style={{ color: '#2C59A5', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px' }}>
                Minimum requirements
              </p>
              <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Who should apply?</h2>
              <p style={{ opacity: 0.8 }}>
                This opportunity is intended for experienced drivers interested in bus or truck driving positions in Germany.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div style={{ border: '1px solid #E5E7EB', borderRadius: '28px', padding: '32px', background: '#FFFCFB' }}>
                <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Bus driver applicants</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Valid professional driving licence</li>
                  <li>Relevant bus driving experience</li>
                  <li>Clear driving record</li>
                  <li>Willingness to relocate</li>
                  <li>Ability to meet employer requirements</li>
                </ul>
              </div>

              <div style={{ border: '1px solid #E5E7EB', borderRadius: '28px', padding: '32px', background: '#FFFCFB' }}>
                <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Truck driver applicants</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Valid professional driving licence</li>
                  <li>Relevant truck driving experience</li>
                  <li>Clear driving record</li>
                  <li>Willingness to relocate</li>
                  <li>Ability to meet employer requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#2C59A5', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px' }}>
                What to prepare
              </p>
              <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Documents you may need</h2>

              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {[
                  'Updated CV',
                  'ID or passport copy',
                  'Driving licence details',
                  'PDP information',
                  'Driving experience history',
                  'Supporting certificates',
                ].map((item) => (
                  <div key={item} style={{ border: '1px solid #E5E7EB', borderRadius: '16px', padding: '20px' }}>
                    <p style={{ fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="apply" style={{ backgroundColor: '#163459', color: '#FFFCFB', borderRadius: '28px', padding: '32px' }}>
              <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px', opacity: 0.8 }}>
                Apply now
              </p>

              <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Start your application</h2>

              <p style={{ marginBottom: '24px', opacity: 0.85 }}>
                Complete the Fillout form below to submit your application. All submissions can flow directly into your Notion recruitment dashboard.
              </p>

              <div style={{ overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)', backgroundColor: '#FFFCFB' }}>
                <iframe
                  src="https://frontseatapplication.fillout.com/apply"
                  title="Germany Driver Application Form"
                  width="100%"
                  height="720"
                  style={{ border: 'none', display: 'block', backgroundColor: '#FFFCFB' }}
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#2C59A5', color: '#FFFCFB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '16px' }}>Start your Germany driver application today</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 32px', fontSize: '20px', opacity: 0.9 }}>
              Share this page via WhatsApp, social media, or Meta ads to recruit qualified drivers.
            </p>

            <a
              href="#apply"
              style={{
                display: 'inline-block',
                backgroundColor: '#FFFCFB',
                color: '#163459',
                padding: '14px 28px',
                borderRadius: '16px',
                fontWeight: 600,
              }}
            >
              Apply for the opportunity
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
