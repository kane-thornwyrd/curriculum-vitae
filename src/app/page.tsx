'use client'

import { FC, ReactNode, useEffect, useMemo, useState, PropsWithChildren, useRef, useLayoutEffect, MutableRefObject, DOMElement, MouseEventHandler } from 'react'
import { Menu, X, Linkedin, Mail, Github, Ambulance, ArrowBigUpDash } from 'lucide-react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {   type Container,
  MoveDirection,
  OutMode } from '@tsparticles/engine'
import { loadSlim } from "@tsparticles/slim"
import { Typewriter } from 'react-simple-typewriter'
import { Urbanist as GFont, Roboto_Slab as MonoFont } from 'next/font/google'

const mainFont = GFont({
  subsets: ['latin']
})

const monoFont = MonoFont({
  subsets: ['latin']
})


const POSTIT_COLOURS = [
  'postIt-orange',
  'postIt-yellow',
  'postIt-lime',
  'postIt-green',
  'postIt-cyan',
  'postIt-violet',
  'postIt-rose',
]

const withWindowMaker : (ref: MutableRefObject<Window | null>) => <T extends (w: Window) => any>(cb: T) => ReturnType<T> | undefined = (ref) => (cb) => {
  return ref.current !== null ? cb(ref.current) : undefined
}

export default function Portfolio() {
  const [bgInit, setBgInit] = useState<boolean>(false)

  const navigableElementsRefs = {
    top: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    futur: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setBgInit(true);
    });
  }, []);
  
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1c1917",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#84cc16",
        },
        links: {
          color: "#84cc16",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const timelineEntries : { year: string, title: string, company: string, description: string | ReactNode }[] = [

    {
      year: 'mar. 2023 ⇒ sep. 2024',
      company: 'Betterway',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Taking back the control on the legacy codebase',
          'Improving data truthfulness',
          'Ingeneering front and back ends key features',
          'Improving app security',
          'Migrating direct API calls to decoupled library invocation',
          'Redacting technical documentation',
          'Improving app developer experience',
        ],
        'Usages': [
          '1 Week long sprints',
          'Ensemble programing',
          'Full Remote',
          'Pair programing',
          'Scrum',
          'Team of 4 devs + 1 PM + 1 Q&A',
          'Test Driven Development',
        ],
        'Architectures': [
          'CQRS',
          'DDD',
          'Dependencies Injection',
          'Event sourcing',
          'Hexagonal',
        ],
        'Technologies': [
          'Antd',
          'AWS',
          'Chai',
          'Cucumber',
          'Express.js',
          'Express.js',
          'GraphQL',
          'Jest',
          'MongoDB',
          'PostgreSql',
          'Serverless',
          'Typescript',
          'Webpack',
        ],
      }}/>),
      title: 'Fullstack Developer'
    },
    {
      year: 'dec. 2022 ⇒ feb. 2023',
      company: 'Finding an interesting project',
      description: '',
      title: ''
    },
    {
      year: 'mar. 2022 ⇒ nov. 2022',
      company: 'Koji',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Implementing an A/B testing administration interface and its backend leveraging over 15 multi-dimensional parameters for the sales terminals of the major fast food multi-nationals',
          'Implementing the custom-tailored blog for one of the largest aviation and defense company'
        ],
        'Usages': [
          '2 devs + 1 PM',
          '4 devs + 1 PM',
          'Full Remote',
          'Scrum',
        ],
        'Architectures': [
          'Atomic Design',
          'Micro services',
        ],
        'Technologies': [
          'Antd',
          'Babel.js',
          'Bootstrap',
          'GraphQL',
          'HTML',
          'JavaScript',
          'Jest',
          'MongoDB',
          'Nest',
          'Next.js',
          'Redux',
          'Webpack',
        ],
      }}/>),
      title: 'Fullstack Developer'
    },
    {
      year: 'jan. 2019 ⇒ mar. 2022',
      company: 'The mishaps of life',
      description: (
          <div className="relative">
            <div className="ambulance">
              <Ambulance size={32} />
            </div>
          </div>
      ),
      title: 'Accident + Rehabilitation'
    },
    {
      year: 'jul. 2018 ⇒ jan. 2019',
      company: 'Merito.fr',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Re-engineering of the MVP front app into a viable SaaS product',
          'Engineering of new components and UI in collaboration with the head of design',
        ],
        'Usages': [
          'Full autonomy + reporting directly to CTO',
          'Solo dev on front + 1 dev back/PM + designer'
        ],
        'Architectures': [
          'proto-atomic design',
        ],
        'Technologies': [
          'Next.js',
          'ReST',
        ],
      }}/>),
      title: 'FrontEnd Lead Dev'
    },
    {
      year: 'feb. 2018 ⇒ may 2018',
      company: 'Iguane Solutions France',
      description: (<PostDefinitionList definitions={{
        'Research and Developpement': [
          'A CLI product leveraging FFmpeg to mass convert media files according to a in-house templating system'
        ],
        'Usages': [
          'Full autonomy + reporting directly to CTO',
        ],
        'Architectures': [
          'Posix',
        ],
        'Technologies': [
          'CLI',
          'Go',
          'Javascript',
          'Rust',
          'Vercel/pkg',
        ],
      }}/>),
      title: 'Senior Engineer'
    },
    {
      year: 'jui. 2016 ⇒ jan. 2018',
      company: 'Convargo',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          '2nd member (out of 4, CTO included) of the "Core Team", we rolled out in prod the MVP in less than 4 months',
          'Engineered the first version of the multi-vector pricing system',
          'Engineered the BI reports generation Slack bot',
          'Creator and maintainer of the in-house React Components library',
          'Engineered the ACL-based routing HOC',
        ],
        'Usages': [
          '2 devs + 1 remote CTO/PM',
          '4 devs + 1 PM',
          '6 devs + 1 PM',
          '"Kanbanized" Scrum',
        ],
        'Architectures': [
          'CQRS',
          'DDD',
          'Event sourcing',
        ],
        'Technologies': [
          'Botkit',
          'Elasticsearch',
          'ES 6 & 7',
          'Express',
          'GraphQL',
          'MongoDB',
          'Node.js',
          'RabbitMQ',
          'React',
          'Redux',
          'Relay',
        ]
      }} />),
      title: 'Fullstack Developper'
    },
    {
      year: 'mar. 2016 ⇒ may 2016',
      company: 'FORMA-DIS',
      description: (
      <PostDefinitionList definitions={{
        'Deeds': [
          'Engineered a Redux/Flux Event driven framework in vanilla js following strong constraints in terms of compatibility and maintainability',
          'Engineered a SPA using Backbone.js',
          'Engineered the standard components library',
          'Engineered an admin UX using Bootstrap3, Material design for Bs3, jQuery-UI, and Toastr for the waow effect',
        ],
        'Usages': [
          'Full autonomy + reporting directly to CTO',
        ],
        'Architectures': [
          'Event driven',
          'Flux pattern',
          'Stabilized DOM update',
        ],
        'Technologies': [
          'Babel.js',
          'Backbone.js',
          'Bluebird',
          'Bootstrap',
          'JQuery-UI',
          'JQuery',
          'Toastr',
        ]
      }} />),
      title: 'Fullstack Developper'
    },
    {
      year: 'oct. 2015 ⇒ mar. 2016',
      company: 'YGL CONSULTING',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'JS Guidance'
        ],
        'Usages': [
          'Various',
        ],
        'Architectures': [
          'Various',
        ],
        'Technologies': [
          'Babel.js',
          'Bootstrap',
          'HTML',
          'JavaScript',
          'ReST',
          'SQL',
        ],
      }}/>),
      title: 'Fullstack Developper'
    },
    {
      year: 'juil. 2013 ⇒ oct. 2015',
      company: 'Cellfish Media',

      title: 'Senior JS Developer / Drupal Adviser',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Engineering the standard Library used on all the projects',
          'Implementation of the entire industrialization chain from automatic linting to deployements',
          'Mentoring the team of integrators on the web technologies',
          'Reduced the time-to-prod of landing pages from a week to a day',
          'Drupal Mentoring'
        ],
        'Usages': [
          'Proto-scrum',
          '1 dev + 4 front-end integrators + 2 Drupal Dev + 1 manager',
          'Full autonomy under the frontend manager',
        ],
        'Architectures': [
          'Various',
        ],
        'Technologies': [
          'Require.js',
          'jQuery',
          'Babel.js',
          'Bootstrap',
          'Backbone.js',
          'Underscore.js',
          'Grunt.js',
          'Gulp',
          'SQL',
          'JavaScript',
        ],
      }}/>
    ),
    },
    {
      year: 'jan. 2012 ⇒ feb. 2014',
      company: 'YGL CONSULTING',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Various'
        ],
        'Usages': [
          'Various'
        ],
        'Architectures': [
          'Various',
        ],
        'Technologies': [
          'Require.js',
          'jQuery',
          'Babel.js',
          'Bootstrap',
          'Backbone.js',
          'Underscore.js',
          'Grunt.js',
          'Gulp',
          'SQL',
          'JavaScript',
        ],
      }}/>),
      title: 'Web Developer/Drupal Expert'
    },
    {
      year: 'oct. 2009 ⇒ dec. 2011',
      company: 'Alter Way',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Various'
        ],
        'Usages': [
          'Various'
        ],
        'Architectures': [
          'Various',
        ],
        'Technologies': [
          'Drupal',
          'AHAH',
          'jQuery',
          'Bootstrap',
          'Ext.js',
          'jQuery-UI',
          'Grunt.js',
          'Gulp',
          'LAMP',
          'Apache',
          'MySQL',
          'PHP',
        ],
      }}/>),
      title: 'Web Dev Drupal/PHP/JS/Dev Ops'
    },
    {
      year: 'sep. 2007 (skipped a semester due to the entrance test results) ⇒ oct. 2009',
      company: 'IN\'Tech INFO - Software engineering course',
      description: (<PostDefinitionList definitions={{
        'Deeds': [
          'Various'
        ],
        'Usages': [
          'Various'
        ],
        'Architectures': [
          'Various',
        ],
        'Technologies': [
          'Drupal',
          'AHAH',
          'jQuery',
          'Bootstrap',
          'Ext.js',
          'jQuery-UI',
          'Grunt.js',
          'Gulp',
          'LAMP',
          'Apache',
          'MySQL',
          'PHP',
        ],
      }}/>),
      title: 'Student'
    }
  ]

  const skillList: string[] = [
    'Antd',
    'AWS',
    'Babel.js',
    'Bootstrap',
    'Botkit',
    'Chai',
    'CLI',
    'Cucumber',
    'Elasticsearch',
    'ES 6 & 7',
    'Express.js',
    'Go',
    'Grunt.js',
    'GraphQL',
    'Gulp',
    'Javascript',
    'Jest',
    'JQuery-UI',
    'jQuery',
    'MongoDB',
    'Mui',
    'Nest',
    'Next.js',
    'Node.js',
    'PostgreSql',
    'RabbitMQ',
    'React',
    'Redux',
    'Relay',
    'Require.js',
    'ReST',
    'Rust',
    'Serverless',
    'SQL',
    'Typescript',
    'Underscore.js',
    'Vercel/pkg',
    'Webpack',
  ]

  const futurList: string[] = [
    'More Functional Programing !',
    'FP-TS',
    'Elixir',
    'Elm',
    'Erlang',
    'Haskell',
  ]

  return (
    <div className={`relative min-h-screen font-sans ${mainFont.className} print:bg-white`}>
      {bgInit && (
      <Particles
        id="tsparticles"
        options={options}
        className='-z-40 absolute print:hidden'
      />)}

      <CVHeader {...{navigableElementsRefs}}/>

      {/* Main Content */}
      <main className="pt-20 max-w-6xl mx-auto backdrop-blur-sm bg-stone-50/50 print:pt-0">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-28 text-center print:hidden" ref={navigableElementsRefs.top}>
          <h2 className="text-7xl font-light mb-4">Senior software engineer</h2>
          <p className={`print:hidden text-xl sketch-underline ${monoFont.className} font-light`}><span>Crafting <Typewriter
            words={['elegant', 'robust', 'simple', 'pragmatic', 'efficient']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />solutions since 2009</span></p>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="container mx-auto px-4 py-20 print:p-0" ref={navigableElementsRefs.experience}>
          <h2 className="text-3xl font-bold mb-8 text-center border-spacing-2 border-b-2 border-stone-800">Experience</h2>
          <div className="relative border-l-2 border-stone-200 ml-3 print:border-none print:m-0">
            {timelineEntries.map((e, i) => (
            <TimelineItem {...e} key={i}/>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto md:px-4 py-20" ref={navigableElementsRefs.skills}>
          <h2 className="text-3xl font-bold mb-8 text-center border-spacing-2 border-b-2 border-stone-800">Skills</h2>
          <div className="flex flex-row flex-wrap place-content-evenly place-items-center gap-3 md:gap-5">
            {skillList.map((s,i) => (<StickyFluoPaper key={i} className='flex md:aspect-square md:w-40 md:h-40 font-light text-2xl place-content-center place-items-center text-center' >{s}</StickyFluoPaper>))}
          </div>
        </section>

        {/* Projects Showcase */}
        {/* <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="AI-Powered Analytics Dashboard"
              description="Developed a real-time analytics dashboard using machine learning algorithms to predict user behavior and optimize business processes."
              technologies={['React', 'Python', 'TensorFlow', 'AWS']}
            />
            <ProjectCard
              title="Blockchain-based Supply Chain Solution"
              description="Created a decentralized application to track and verify product authenticity throughout the supply chain, enhancing transparency and reducing fraud."
              technologies={['Solidity', 'Ethereum', 'Node.js', 'React']}
            />
          </div>
        </section> */}
        
        {/* Futur */}
        <section id="futur" className="container mx-auto px-4 py-20" ref={navigableElementsRefs.futur}>
          <h2 className="text-3xl font-bold mb-8 text-center border-spacing-2 border-b-2 border-stone-800">What I&apos;d like to try</h2>
          <div className="flex flex-row flex-wrap place-content-evenly place-items-center gap-3 md:gap-10">
            {futurList.map((s,i) => (<StickyFluoPaper key={i} className='flex md:aspect-square md:w-40 md:h-40 font-light text-2xl place-content-center place-items-center text-center' >{s}</StickyFluoPaper>))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20" ref={navigableElementsRefs.contact}>
          <h2 className="text-3xl font-bold mb-8 text-center border-spacing-2 border-b-2 border-stone-800">Get in Touch</h2>
          <div className="flex justify-center space-x-6 text-stone-200">
            <a href="https://github.com/kane-thornwyrd" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 px-4">
              <Github size={24} className='drop-shadow-intense' />
            </a>
            <a href="https://www.linkedin.com/in/jean-c%C3%A9dric-t/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 px-4">
              <Linkedin size={24} className='drop-shadow-intense' />
            </a>
            <a href="mailto:jean.cedric.t+cv-link@gmail.com?subject=Prise%20de%20contact%20depuis%20le%20CV" className="hover:text-lime-400 px-4">
              <Mail size={24} className='drop-shadow-intense' />
            </a>
          </div>
        </section>

        
        <div className="back-to-top-wrapper absolute -right-5 bottom-6 w-16 pointer-events-none print:hidden">
          <a aria-label="Scroll to Top" className="back-to-top-link" onClick={(e) => {
            e.stopPropagation();
            const el = document.getElementById('top')
            if(el && window) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          }}><ArrowBigUpDash style={{'filter' : 'drop-shadow(0 0.1rem 2px rgb(0 0 0 / 0.7))'}}/></a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-400 py-4 text-center" >
        <p>&copy; 2024 Jean-cédric T. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

function TimelineItem({ year, title, company, description }: { year: string, title: string, company: string, description: string | ReactNode }) {
  return (
    <div className="relative mb-8 ml-6 print:m-0 print:pt-6">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white bg-lime-500 print:hidden">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </span>
      <span className="hidden absolute print:flex items-center justify-center w-6 h-6 rounded-full -left-6 top-0.5">
        <div className='hidden w-2 h-2 bg-stone-950 rounded-full print:block'></div>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-50 print:text-stone-950 print:absolute print:w-full print:mx-60 print:top-0">{title}&nbsp;@&nbsp;{company}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-300 print:text-stone-950 print:absolute print:top-2">{year}</time>{typeof description === 'string' ? (<p>{description}</p>) : (<>{description}</>)}
    </div>
  )
}

const CVHeader = ({
  navigableElementsRefs
} : {navigableElementsRefs : Record<string, MutableRefObject<null | HTMLElement>>}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState<number>(0)
  const currentlySelected = useRef<HTMLElement | null>(null)

  const windowRef = useRef<Window | null>(null)

  useEffect(() => {
    if(typeof window !== 'undefined' && windowRef.current === null) {
      windowRef.current = window
    }
  }, [] )

  const withWindow = withWindowMaker(windowRef)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useLayoutEffect(() => {
    const handleScroll = () => {
      withWindow((w) => {
        if(Math.abs(scrollY - w.scrollY) > 50)
          setScrollY(w.scrollY)
      })
    }

    handleScroll();
    withWindow((w) => {
      w.addEventListener("scroll", handleScroll)
    })

    return () => {
      withWindow((w) => {
        w.removeEventListener("scroll", handleScroll)
      })
    };
  }, []);

  const navigateTo = (el: MutableRefObject<null | HTMLElement>) => {
    const signalClass = 'current-section'
    
    return (e : { stopPropagation : Function}) => {
      if(el.current !== null){
        e.stopPropagation()
        withWindow((w) => {
          if(el.current !== null)
            w.scrollTo({
              top: Math.round(el.current.getBoundingClientRect().top + document.documentElement.scrollTop),
              behavior: 'smooth',
            })
        })
        
        const children = el.current.children
        for (const key in children) {
          if (children[key].tagName === 'H2') {
            currentlySelected.current?.classList.remove(signalClass)
            children[key].classList.add(signalClass)
            currentlySelected.current = children[key] as HTMLElement
            setIsMenuOpen(false)
            break
          }
        }
      }
    }
  }

  return (
    <header id="top" className="fixed w-full z-10 backdrop-blur-md bg-stone-100/30 border-b border-stone-200 shadow-md shadow-black/50 print:container print:mx-auto print:shadow-none print:relative">
      <div className="container max-w-5xl mx-auto px-4 py-4 flex justify-between items-center print:p-0 print:justify-normal">
        <h1 className="text-2xl font-bold print:me-4">Jean-Cédric T.</h1>
        <p>Senior software engineer</p>
        <nav className="relative hidden md:flex space-x-4 print:hidden">
          <a onClick={navigateTo(navigableElementsRefs.experience)} className="hover:text-stone-600 hover:underline cursor-pointer">Experience</a>
          <a onClick={navigateTo(navigableElementsRefs.skills)} className="hover:text-stone-600 hover:underline cursor-pointer">Skills</a>
          {/* <a href="#projects" className="hover:text-stone-600 hover:underline">Projects</a> */}
          <a onClick={navigateTo(navigableElementsRefs.futur)} className="hover:text-stone-600 hover:underline cursor-pointer">What I&apos;d like to try</a>
          <a onClick={navigateTo(navigableElementsRefs.contact)} className="hover:text-stone-600 hover:underline cursor-pointer">Get in Touch</a>
        </nav>
        <button onClick={toggleMenu} className="print:hidden md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidmden backdrop-blur-md place-content-center text-center">
          <a onClick={navigateTo(navigableElementsRefs.experience)} className="block px-4 py-5 hover:bg-stone-100">Experience</a>
          <a onClick={navigateTo(navigableElementsRefs.skills)} className="block px-4 py-5 hover:bg-stone-100">Skills</a>
          {/* <a href="#projects" className="block px-4 py-5 hover:bg-stone-100">Projects</a> */}
          <a onClick={navigateTo(navigableElementsRefs.futur)} className="block px-4 py-5 hover:bg-stone-100">What I&apos;d like to try</a>
          <a onClick={navigateTo(navigableElementsRefs.contact)} className="block px-4 py-5 hover:bg-stone-100">Get in Touch</a>
        </nav>
      )}
    </header>)
}

// function ProjectCard({ title, description, technologies } : { title : string, description : string, technologies : string[] }) {
//   return (
//     <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <span className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: description}} />
//       <div className="flex flex-wrap gap-2">
//         {technologies.map((tech, index) => (
//           <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm">{tech}</span>
//         ))}
//       </div>
//     </div>
//   )
// }

const PostDefinitionList: FC<{definitions: Record<string, string[]>}> = ({definitions}) => (
  <dl className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {Object.entries(definitions).map(([term, content], index) => (
      <div key={index}>
        <StickyFluoPaper className='bg-stone-200'>
          <dt className='text-xl font-thin text-stone-500 m-1'>{term}</dt>
          <dd>
            <ul className='flex flex-wrap'>
            {content.map((v, i) => (<li key={i} className={PaperCutsClassNames(() => !!(i%2))}>{v}</li>))}
            </ul>
          </dd>
        </StickyFluoPaper>
      </div>
    ))}
  </dl>)

const StickyFluoPaper : FC<PropsWithChildren<unknown> & { className?: string} & Record<string, unknown>> = (props) => {
  const { children, className, ...restProps } = props

  const randomPostItColour = () => POSTIT_COLOURS[randInt(POSTIT_COLOURS.length - 1)]

  console.log(!className?.search(/bg-/ig));
  

  return (<div {...restProps} className={`sticky-fluo-paper ${className} ${!className?.search(/bg-/ig) ? '' : randomPostItColour() } `}>{children}</div>)
}

const PaperCutsClassNames = (altern : () => boolean =  () => !!randInt(), className : string = 'bg-stone-100 shadow-sm shadow-black/50') => `px-4 py-1 m-1 ${altern() ?'rotate-1 -skew-y-1':'-rotate-1 skew-y-1'} ${className}`

const randInt = (max : number = 1) => Math.round(Math.random() * Math.trunc(max))
