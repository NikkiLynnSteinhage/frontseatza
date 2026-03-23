export default function Page() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #FFFCFB; color: #163459; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
      `}</style>

      {/* Sticky Button */}
      <a href="#apply" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#2C59A5',
        color: '#FFFCFB',
        padding: '12px 20px',
        borderRadius: '999px',
        fontWeight: 600,
        zIndex: 1000
      }}>
        Apply Now
      </a>

      <main>

        {/* HERO */}
        <section style={{background:'linear-gradient(135deg,#163459,#2C59A5)',color:'#fff',padding:'80px 24px'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <p style={{letterSpacing:'0.3em',textTransform:'uppercase',opacity:0.8}}>
              Leelyn Management × FrontSeat
            </p>

            <h1 style={{fontSize:'48px'}}>
              Bus and truck driver opportunities in Germany
            </h1>

            <p style={{maxWidth:'700px',fontSize:'20px'}}>
              Build your career internationally with structured support, relocation assistance and long-term employment opportunities.
            </p>
          </div>
        </section>

        {/* WHY GERMANY */}
        <section style={{padding:'60px 24px',maxWidth:'1200px',margin:'0 auto'}}>
          <h2>Why Germany?</h2>
          <ul>
            <li>Strong social security and healthcare</li>
            <li>Family benefits and education support</li>
            <li>Stable long-term employment</li>
          </ul>
        </section>

        {/* SALARY */}
        <section style={{background:'#F5F7FB',padding:'60px 24px'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <h2>Salary Example</h2>
            <p>€3,265 gross per month</p>
            <p>€2,191 net (single)</p>
            <p>€2,483 net (family)</p>
          </div>
        </section>

        {/* JOURNEY */}
        <section style={{padding:'60px 24px',maxWidth:'1200px',margin:'0 auto'}}>
          <h2>Your Journey</h2>
          <ol>
            <li>Apply online</li>
            <li>Assessment centre</li>
            <li>Language training</li>
            <li>Relocation</li>
            <li>Start working</li>
          </ol>
        </section>

        {/* REQUIREMENTS */}
        <section id="requirements" style={{background:'#F5F7FB',padding:'60px 24px'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <h2>Minimum Requirements</h2>
            <ul>
              <li>Valid driving licence</li>
              <li>Driving experience</li>
              <li>Clean record</li>
              <li>Willing to relocate</li>
            </ul>
          </div>
        </section>

        {/* FORM */}
        <section id="apply" style={{padding:'60px 24px'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <h2>Apply Now</h2>

            <iframe
              src="https://frontseatapplication.fillout.com/apply"
              width="100%"
              height="720"
              style={{border:'none'}}
            />
          </div>
        </section>

      </main>
    </>
  );
}
