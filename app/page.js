export default function FrontSeatLeelynLandingPage() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #FFFCFB; color: #163459; }
        * { box-sizing: border-box; }
        a { text-decoration: none; }
      `}</style>

      <a href="#apply" style={{position:'fixed',bottom:'20px',right:'20px',background:'#2C59A5',color:'#FFFCFB',padding:'12px 20px',borderRadius:'999px',fontWeight:600,boxShadow:'0 10px 25px rgba(0,0,0,0.15)',zIndex:1000}}>
        Apply Now
      </a>

      <main style={{minHeight:'100vh'}}>
        <section style={{background:'linear-gradient(135deg,#163459,#2C59A5)',color:'#fff',padding:'80px 24px'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <p style={{letterSpacing:'0.3em',textTransform:'uppercase',opacity:0.8}}>Leelyn Management × FrontSeat</p>
            <h1>Bus and truck driver opportunities in Germany</h1>
            <p>Apply for international driving opportunities in Germany through Leelyn and FrontSeat.</p>
          </div>
        </section>

        <section id="apply" style={{padding:'40px'}}>
          <iframe src="https://frontseatapplication.fillout.com/apply" width="100%" height="720" style={{border:'none'}}></iframe>
        </section>
      </main>
    </>
  );
}
