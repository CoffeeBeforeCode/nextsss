import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip Collins | Global Leadership Coach & Fractional CEO</title>
        <meta name="description" content="Coaching | Emotional Intelligence | Fractional CEO | Digital Strategy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&family=Yesteryear:wght@400&display=swap" rel="stylesheet" />
      </Head>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontFamily: 'Waiting for the Sunrise, cursive', 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Hello! I&apos;m Phillip Collins
          </h1>
        </section>

        {/* Two Column Introduction */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
          alignItems: 'start'
        }}>
          {/* Column 1 - Portrait */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '250px',
              height: '300px',
              backgroundColor: '#f0f0f0',
              border: '2px dashed #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              borderRadius: '10px'
            }}>
              <span style={{ color: '#666' }}>Portrait Photo</span>
            </div>
          </div>

          {/* Column 2 - Introduction Text */}
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
              My coaching partnerships have spanned diverse contexts and cultures, allowing me to work with senior leaders across continents and industries. This global experience has deepened my understanding of leadership challenges across different cultural contexts.
            </p>

            {/* Colored Box */}
            <div style={{
              backgroundColor: '#7E2D40',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              marginBottom: '30px'
            }}>
              <strong>Core Regions:</strong>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', paddingLeft: '20px', marginTop: '10px' }}>
                <li>Europe (UK, Ireland, France, Belgium, Holland)</li>
                <li>Middle East (UAE, Saudi Arabia, Israel)</li>
                <li>Americas (USA, Argentina, Brazil)</li>
                <li>Asia & Pacific (India, Singapore)</li>
              </ul>

              <div style={{ marginTop: '20px' }}>
                <strong>Primary Industries:</strong>
                <p style={{ marginTop: '10px', marginBottom: '10px' }}>
                  I&apos;ve worked with executives across major industries including:
                </p>
                <ul style={{ listStyleType: 'disc', marginLeft: '20px', paddingLeft: '20px' }}>
                  <li>Technology & Digital Innovation</li>
                  <li>Healthcare & Life Sciences</li>
                  <li>Financial Services & Banking</li>
                  <li>Manufacturing & Engineering</li>
                  <li>Government & Public Sector</li>
                </ul>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Within these broad industries, I&apos;ve partnered with leaders across numerous sectors - too many to list here, ranging from early-stage startups to established multinationals.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
              This breadth of experience enriches each coaching partnership while maintaining focus on your unique context and objectives.
            </p>

            {/* Signature */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{
                fontFamily: 'Yesteryear, cursive',
                fontSize: '2rem',
                color: '#DD9933',
                margin: '0'
              }}>
                Phillip Collins
              </h3>
            </div>

            {/* Social Icons Placeholder */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#0077B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span style={{ fontSize: '12px' }}>LI</span>
              </div>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1DA1F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span style={{ fontSize: '12px' }}>X</span>
              </div>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#E4405F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span style={{ fontSize: '12px' }}>IG</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          backgroundColor: '#f8f9fa',
          padding: '40px 20px',
          textAlign: 'center',
          borderRadius: '10px',
          marginBottom: '60px'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', marginBottom: '20px', color: '#333' }}>
            Curious about your leadership equation?
          </h2>
          <button style={{
            backgroundColor: '#F96E1E',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>
            Let&apos;s explore together
          </button>
        </section>

        {/* Why People Need a Leadership Coach */}
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{
            fontFamily: 'Waiting for the Sunrise, cursive',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>
            Why People need a Leadership Coach
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {/* Card 1 */}
            <div style={{
              backgroundColor: '#7E2D40',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>The Leadership Equation</h4>
              <p style={{ lineHeight: '1.6' }}>
                I help executives apply the PE=PO-I equation in their specific context. When we reduce interference—all the &quot;stuff&quot; that gets in your way—your performance naturally rises to meet your potential. Our coaching partnership creates space for you to identify what&apos;s limiting your effectiveness and develop strategies that work for you.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              backgroundColor: '#7E2D40',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Cross-Cultural Intelligence</h4>
              <p style={{ lineHeight: '1.6' }}>
                My coaching partnerships have spanned diverse contexts across Europe, the Middle East, Americas, and Asia. This global experience has deepened my understanding of leadership challenges across different cultural contexts, allowing you to navigate the complexities of leading across boundaries with strategic clarity.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              backgroundColor: '#7E2D40',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Emotional Intelligence</h4>
              <p style={{ lineHeight: '1.6' }}>
                Leadership effectiveness is profoundly influenced by emotional intelligence. Through focused conversations around self-perception, self-expression, interpersonal relationships, decision-making, and stress management, I help you develop greater awareness, clearer communication, stronger connections, better judgment, and enhanced resilience.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{
              backgroundColor: '#7E2D40',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Leadership in Practice</h4>
              <p style={{ lineHeight: '1.6' }}>
                I believe leadership is a practice—much like yoga or meditation—that one engages with throughout life rather than a destination or achievement. Through our partnership, you&apos;ll develop a sustainable approach to leadership development that integrates daily awareness with continuous growth, creating impact across all five domains of your life.
              </p>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{
            fontFamily: 'Waiting for the Sunrise, cursive',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>
            Some of the many companies I&apos;ve worked with...
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            {/* Logo placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{
                height: '80px',
                backgroundColor: '#f0f0f0',
                border: '2px dashed #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px'
              }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Logo {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Second CTA */}
        <section style={{
          backgroundColor: '#f8f9fa',
          padding: '40px 20px',
          textAlign: 'center',
          borderRadius: '10px',
          marginBottom: '60px'
        }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', marginBottom: '20px', color: '#333' }}>
            Ready to enhance your leadership effectiveness?
          </h2>
          <button style={{
            backgroundColor: '#F96E1E',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}>
            Schedule an exploratory conversation
          </button>
        </section>

        {/* Client Testimonials */}
        <section style={{ marginBottom: '60px' }}>
          <h1 style={{
            fontFamily: 'Waiting for the Sunrise, cursive',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#333'
          }}>
            Leadership Transformation in Action
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {/* Testimonial 1 */}
            <div style={{
              backgroundColor: '#1A365D',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              borderLeft: '5px solid #F96E1E'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                fontStyle: 'italic',
                marginBottom: '20px'
              }}>
                &quot;My team and I have never had such honest conversations with each other, until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.&quot;
              </p>
              <div style={{ fontSize: '0.9rem', color: '#F96E1E', fontWeight: 'bold' }}>
                <strong>Country Head</strong><br />
                Telecommunications
              </div>
            </div>

            {/* Testimonial 2 */}
            <div style={{
              backgroundColor: '#1A365D',
              color: 'white',
              padding: '30px',
              borderRadius: '10px',
              borderLeft: '5px solid #F96E1E'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                fontStyle: 'italic',
                marginBottom: '20px'
              }}>
                &quot;I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am; expanding my capabilities while preserving my authentic self.&quot;
              </p>
              <div style={{ fontSize: '0.9rem', color: '#F96E1E', fontWeight: 'bold' }}>
                <strong>Chief Financial Officer</strong><br />
                Housing and Community Development
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Equation */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'Waiting for the Sunrise, cursive',
            fontSize: 'clamp(2.5rem, 6vw, 3rem)',
            color: '#333',
            marginBottom: '20px'
          }}>
            The Leadership Equation
          </h2>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 'bold', color: '#7E2D40' }}>
            PE = PO - I
          </div>
        </section>
      </main>
    </>
  );
}
