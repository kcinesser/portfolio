export const projects = [
  {
    title: "MusicDB",
    slug: "musicdb",
    excerpt: "An application to store music education resources.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/musicdb/musicdb-thumb.png",
    tags: ["", "react", "django", "rails", "sass", "redux"],
    paragraph_one:
      "This is an application I've basically rebuilt from scratch a few different times over the years. It initially started as a Ruby on Rails application, using standard .erb templating, but then I realized I wanted a bit more interactivity on the frontend. So, I rebuilt it using the 'MERN' stack (MongoDB, Express, React, Node).",
    paragraph_two:
      "This was a first for me. I was wanting to jump into React, but had never really used Node or Express, and definitely hadn't messed around with a nosql database. It worked well for what I needed at the time, but then I wanted to try Django.",
    paragraph_three:
      "Basically, this app serves as a tool for saving musical resources. I've accumulated a few million (kidding... kinda) different guitar tabs, sheet music, chord charts, scale charts, etc. over the years, and can never keep track of them for more than a week. This solves that. And it connects to Spotify to quickly look up artists and songs to save, which I love.",
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/musicdb/musicdb-1.png",
    featured_image_caption: "A simple dashboard.",
    body_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/musicdb/musicdb-2.png",
    body_image_url_two:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/musicdb/musicdb-3.png",
    body_image_caption: "Adding a song to an artist by searching Spotify.",
  },
  {
    title: "IAClients",
    slug: "iaclients",
    excerpt: "A Laravel application to store client and project information.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/iaclients/iaclients-thumb.png",
    tags: ["", "react", "laravel", "redux", "tailwind"],
    paragraph_one:
      "I can't show too much of this project. This is an internal project I built for Firespring to help our team better track client projects. I'll only be able to show off some dumby data.",
    paragraph_two:
      "The application is built on top of the Laravel framework. This was the first project I had ever used Laravel, but if you're familiar with any other MVC framework, it should be pretty quick to pick up. The front end is a React application that utilizes Laravels' Passport library for user authentication.",
    paragraph_three:
      "Besides acting as a CMS for internal use, the application connected to several other services and our own monitor WordPress plugin.",
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/iaclients/iaclients-1.png",
    featured_image_caption: "The main clients view.",
    body_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/iaclients/iaclients-2.png",
    body_image_caption: "Viewing a client.",
  },
  {
    title: "FS Monitor",
    slug: "fsmonitor",
    excerpt:
      "Custom WordPress plugin to pull information about the site into the IAClients app.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/fsmonitor/fsmonitor-thumb.png",
    tags: ["", "wordpress"],
    paragraph_one:
      "This is a plugin I developed to help us manage our clients WordPress sites.",
    paragraph_two:
      "The plugin acts as a monitor, tracking basic user actions in the to help keep track up plugin updates, theme updates, post and page creation, etc. and sending the information to our internal application. This allowed us to track site data in one place for over 50 client sites. We were also able to leverage that data to generate reports that could be sent to clients upon request.",
    paragraph_three: null,
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/fsmonitor/fsmonitor-1.png",
    featured_image_caption: "Raw text version of what we send clients.",
    body_image_url: null,
    body_image_caption: null,
  },
  {
    title: "FS Gutenberg Theme",
    slug: "gutenberg",
    excerpt: "From-scratch theme extending the new WordPress page builder.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/gutenberg/gutenberg-thumb.png",
    tags: ["", "react", "wordpress", "sass"],
    paragraph_one:
      "For most of our WordPress clients, we use the Divi theme, mostly to provide the page builder to the client. Divi is a great tool for its out-of-the-box tools, but for some of our more custom design, we found we spent more time fighting Divi than actually using it.",
    paragraph_two:
      "Enter the WordPress Block. I wondered if it might be worth building our own theme and leveraging the new WordPress page builder, so I built one. We replicated one of our custom designs using the theme. The most interesting part was building our custom blocks using WordPress' block API, which is essentially their own abstraction over top React.",
    paragraph_three: null,
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/gutenberg/gutenberg-1.png",
    featured_image_caption: "Homepage.",
    body_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/gutenberg/gutenberg-2.png",

    body_image_caption: "Navigation.",
  },
  {
    title: "FartherWest",
    slug: "fartherwest",
    excerpt: "Simple MERN application for a portfolio.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/fartherwest/farther-thumb.png",
    tags: ["", "react", "tailwind"],
    paragraph_one:
      "A simple React SPA for a friend who wanted a way to show and potentially sell her art and clothing. Her brand is very focused on 'adventure', so I looked to many of the outdoor clothing brands for inspiration.",
    paragraph_two: null,
    paragraph_three: null,
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/fartherwest/farther-1.png",
    featured_image_caption: null,
    body_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/fartherwest/farther-2.png",
    body_image_caption: null,
  },
  {
    title: "OVA",
    slug: "ova",
    excerpt: "Client WordPress site. Simple, but beautiful.",
    thumb_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/ova/ova-thumb.png",
    paragraph_one:
      "I didn't lie when I said it's beautiful, but I can't take any credit for it. This is straight from the mind of designer Dakotah Hicks (seriously check her out). There isn't much to this site from a functionality standpoint, just some cool css and javascript tricks, and I just really love the way it looks.",
    paragraph_two: null,
    paragraph_three: null,
    designer_credit: true,
    featured_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/ova/ova-1.png",
    featured_image_caption: null,
    body_image_url:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/ova/ova-2.png",
    body_image_caption: null,
    body_image_url_two:
      "https://gesser-portfolio-site.s3.us-east-2.amazonaws.com/projects/ova/ova-3.png",
    tags: ["", "wordpress"],
  },
];
