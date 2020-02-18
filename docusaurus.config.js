module.exports = {
  title: "ModbusBox",
  tagline: "Connecting industrial grade devices to the cloud",
  url: "https://mbox-iotbits.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "iotbits-us", // Usually your GitHub org/user name.
  projectName: "blog.iotbits.net", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "ModbusBox",
      logo: {
        alt: "ModbusBox",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/introduction", label: "Docs", position: "left" },
        {
          href: "https://github.com/iotbits-us/",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction"
            },
            {
              label: "Initial Setup",
              to: "docs/initial-setup"
            },
            {
              label: "Start Sending Data",
              to: "docs/start-sending-data"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "IOTBITS Blog",
              href: "https://blog.iotbits.net"
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/iotbits-us"
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCWUi3F8CQTt2Cm-EEviW8mQ"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTBITS`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/iotbits-us/mbox.iotbits.net/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
