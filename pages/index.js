import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>uCare Customer Service Help Desk & Support Ticket System</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1 className="title">
          <a href="https://www.ucaresupport.com">uCare Support System</a>
        </h1>

        <hr/>

        <div className="">
          uCare is a free customer service software, which allows you and your agents to respond to support ticket requests to your customers.  
        </div>

        <h2>uCare Features</h2>

        <div className="grid">

          <div className="card">
            <h3>Knowledge Base</h3>
            <p>Create documentation and FAQ so that your customers can self-serve and find help quick. Supports nested categories.</p>
          </div>

          <div className="card">
            <h3>Email Templates</h3>
            <p>Customize the automated emails that your customers receive, and use shortcodes to tailor emails to each customer.</p>
          </div>

          <div className="card">
            <h3>Canned Responses</h3>
            <p>Respond to common customer questions and issues quickly. Create preset replies allowing you and your agents to stay consistent with your answers.</p>
          </div>

          <div className="card">
            <h3>Custom Fields</h3>
            <p>Need to collect additional information? Create custom fields to fine-tune the information you need from your customers.</p>
          </div>
          
          <div className="card">
            <h3>Automated Responder</h3>
            <p>Let your customers feel assured that their requests have been received. uCare can automatically provide an initial response to all tickets, and it can be programmed to provide additional responses based on ticket category or keywords.</p>
          </div>

          <div className="card">
            <h3>Ticket Routing</h3>
            <p>Automatically assign tickets to certain agents, based on the ticket category or department</p>
          </div>

          <div className="card">
            <h3>Email Piping</h3>
            <p>Integrate uCare with your existing email address, allowing uCare to convert emails you receive into tickets, which allows you to respond to emails from the helpdesk, and retain your customer information.</p>
          </div>

          <div className="card">
            <h3>Customer Satisfaction</h3>
            <p>Let your customers tell you how well your business and your agents doing. With the Customer Satisfaction module, your customers will automatically receive a simple feedback requests to rate your support.</p>
          </div>

          <div className="card">
            <h3>White Labelled</h3>
            <p>Customize the interface with your own colors and logo</p>
          </div>

          <div className="card">
            <h3>Slack Integration</h3>
            <p>Stay on-top of your support queue, by receiving notifications in Slack for new tickets and replies.</p>
          </div>

        </div>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          uCare Customer Service Help Desk & Support Ticket System
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
