import { FaLinkedin } from "react-icons/fa";
import { styled } from "styled-components";

export const CodingText = () => {
  return (
    <>
      <Section>
        <Title>Why I Think GAIL's And I Are A Good Fit</Title>

        <Paragraph>
          🥖 I’ve spent the last 5 years working at the leading company in
          European energy trading technology: a fast-paced, high-stakes
          environment where I built and maintained complex systems used by over
          85% of on-screen energy traders across the continent.
        </Paragraph>

        <Paragraph>
          🥖 Right now, I’m looking to pivot away from that world into something
          that feels more grounded, and genuinely motivating. GAIL’s ticks those
          boxes ✅. As a hobbyist baker, the idea of contributing to the success
          of neighbourhood bakeries through thoughtful tech is honestly
          exciting.
        </Paragraph>

        <Paragraph>
          🥖 On the technical side, I bring 5+ years of full-stack experience
          building scalable enterprise apps with
          <strong> React + TypeScript</strong>, including fast, accessible UIs
          and solid automated testing using
          <strong> Jest</strong> and <strong> Cypress</strong>. I’ve deployed
          production-ready systems using both
          <strong> Azure</strong> and <strong> AWS</strong> (Lambda, Pipelines,
          API Gateway), and I’m very experienced with <strong> .NET, C#</strong>
          , and <strong> SQL</strong>.
        </Paragraph>

        <Paragraph>
          🥖 I also just really enjoy working in a team, sharing ideas, solving
          problems together, and helping others grow. I’ve mentored colleagues
          (two of whom were promoted), and creating that kind of supportive,
          collaborative atmosphere is something I care a lot about.
        </Paragraph>

        <Paragraph>
          🥖 Please feel free to have a look at{" "}
          <a
            href="/assets/daniel-lord-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            my CV
          </a>{" "}
          or <LinkedInLink />
          for more info.
        </Paragraph>
      </Section>
      <Section>
        <Title>What Interests Me About The Role</Title>
        <Paragraph>
          🍞 The variety of applications you work on, from transport and
          ordering to forecasting and production. It seems like a business with
          lots of moving parts, which makes the tech side challening/exciting.
        </Paragraph>
        <Paragraph>
          🍞 It seems like a hands-on role and not "just a coding job". It
          sounds like there’s real ownership and collaboration across teams,
          which is how I enjoy working.
        </Paragraph>
        <Paragraph>
          🍞 I’m curious about how you’re using AI and machine learning in the
          business today, and what your future plans are.
        </Paragraph>
        <Paragraph>
          🍞 I’d love to know more about your goals over the next 6–9 months,
          both from a business and tech perspective. How does this role fit into
          that picture. (I.e. How is success measured in this role?)
        </Paragraph>
      </Section>
    </>
  );
};

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
  font-family: sans-serif;
  border-top: 1px solid white;
`;

const Title = styled.h2`
  margin-top: 0;
  font-family: sans-serif;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-align: justify;
`;

const LinkedInLink = () => (
  <a
    href="https://www.linkedin.com/in/daniel-lord-597535197"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={40} style={{ marginRight: "0.5rem" }} />
  </a>
);
