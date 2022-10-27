module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
       container: (theme) => ({
      // To center containers by default
      center: true,
       padding: '15px',
    }),
    

//add our external color

     colors: {
      blue:'#262261',
      white:'#fff',
      lightblue:'#4D496F',
      bluelight:'#1978f2',
      bluesky:'#e7f0f9',
      purplelight:'#4d496f',
      gray:'#7e7b96',
      graylight:'#56606d',
      light:'#f5f6fa',
      red:'#ff6262',
      dark:'#181439',
      yallow:'#ffb84c',
      lavender:'#e6e4f3',
      lavender2:'#eeedf8',
      aliceblue:'#e9f6fe',
      rosewhite:'#ffede6',
      logan:'#9b98b4',
      tutu:'#ffe9e9',
      profile : '#EDECF4',
      profileInfoBg: '#f7f6ff',
      whitelight: '#F0F0F0;'
    },

    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '85px',
      full:'100%',
      input:'52px',
     },
     borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '30px',
    },

    fontSize: {
      'fs-30': '30px',
      'fs-25': '25px',
      'fs-18': '18px',
      'fs-16': '16px',
       'fs-12': '12px',
       'fs-13': '13px',
       'fs-14': '14px',
       'fs-20': '20px',
       'fs-9': '9px',
      
     }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover'],
      witdh: ['group-hover'],
    },
  },
  plugins: [

   function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1110px',
          },
        }
      })
    }
    //  end


  ],
}
