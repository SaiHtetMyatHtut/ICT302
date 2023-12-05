import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { AboutLayout } from '@/components/AboutLayout'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import portraitImage from '@/images/portrait.jpg'
import { TwitterIcon } from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Empowering IT Professionals.',
}

export default function Uses() {
  return (
    <AboutLayout>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Pro Hub Professional Empowering IT Professionals
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to Pro Hub Professional, where we are committed to empowering IT professionals through comprehensive training and valuable resources. At Patato, we understand the dynamic and ever-evolving nature of the IT landscape, and we strive to be your trusted partner in navigating the challenges and embracing the opportunities in the digital world.
            </p>
            <div className="flex felx-row items-center space-x-4">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Facebook
              </SocialLink>
              <SocialLink href="mailto:spencer@planetaria.tech" icon={MailIcon}>
                info@prohub.tech
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-20 mt-20">
        <ToolsSection title="Our Vision">
          <Tool title="Shaping the Future of IT Excellence in Professional Ways">
            At Pro Hub Professional, we envision a future where IT professionals are not only adept at navigating the complexities of the digital world but are also leaders and innovators shaping the future of technology. Our vision is to be the premier platform that catalyzes this transformation, inspiring individuals and organizations to achieve unparalleled success in the dynamic field of information technology.
          </Tool>
          <Tool title="Industry Leadership">
            Enhance leadership skills to effectively guide IT teams and projects. Foster skills in strategic planning, decision-making, and project management within an IT context.
          </Tool>
          <Tool title="Continuous Learning and Growth">
            helping industry leaders improve their IT professional skills. Here are some specific aspects you might consider under this objective Global Impact and Collaboration

          </Tool>
          <Tool title="Global Perspectives">
            Provide content that highlights global IT trends, challenges, and innovations, fostering a broader perspective among industry leaders.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Our Mission">
          <Tool title="Knowledge, Skills, and Excellence">
            At the heart of Pro Hub Professional is our unwavering mission to provide top-notch training and resources for IT professionals. We believe that knowledge is the key to success, and our programs are designed to equip you with the skills and insights needed to thrive in the fast-paced and competitive field of information technology.
          </Tool>
          <Tool title="Open Access Education">
            We believe in the democratization of education. Our mission is to break down barriers by providing open access to high-quality educational content, ensuring that knowledge is accessible to anyone, anywhere, regardless of their educational background or geographical location.
          </Tool>
          <Tool title="Shared Knowledge Economy">
            Pro Hub Professional envisions a knowledge economy where the sharing of expertise and insights propels the entire IT community forward. Our mission is to be a catalyst for this shared knowledge ecosystem, facilitating collaboration and collective growth.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Our Values">
          <Tool title="Excellence">
            We are committed to the pursuit of excellence in all that we do. From the quality of our training programs to the resources we provide, we strive for the highest standards to empower IT professionals with the knowledge and skills needed for success.
          </Tool>
          <Tool title="Integrity">
            Integrity is at the core of our operations. We conduct ourselves with honesty, transparency, and ethical behavior. We believe in building trust with our community, fostering an environment where individuals can rely on us for accurate information and valuable insights.
          </Tool>
          <Tool title="Innovation">
            We embrace innovation as a driving force for progress. Our commitment to fostering a culture of creativity and forward-thinking ensures that we stay at the forefront of technological advanceme
          </Tool>
        </ToolsSection>
      </div>
    </AboutLayout>
  )
}
