import  Env from 'react-native-config';

export const MAIN_URL =
               // 'https://biesp-wgpef.ondigitalocean.app'
               //https://biesp-2-xi9sc.ondigitalocean.app/
               'https://biesp-9tjco.ondigitalocean.app'

export const API_URL =
               // 'https://biesp-wgpef.ondigitalocean.app/api/v1'
              // https://biesp-2-xi9sc.ondigitalocean.app/
               'https://biesp-9tjco.ondigitalocean.app/api/v1'



export const MAPS_API_KEY = process.env.MAPS_API_KEY || ''

export const items = [
    // this is the parent or 'item'
    {
      name: 'CIE',
      id: 0,
      // these are the children or 'sub items'
      children: [
        {
            name: '1CIE',
            id: 1,
          },
        {
          name: '2CIE',
          id: 2,
        },
        {
          name: '3CIE',
          id: 3,
        },
        {
          name: '4CIE',
          id: 4,
        },
        
        
      ],
    },
  
  ];