import appointment_img from './appointment_img.png'
import arrow_icon from './arrow_icon.svg'
import Cardiologist from './Cardiologist.png'
import chats_icon from './chats_icon.svg'
import contact_image from './contact_image.png'
import cross_icon from './cross_icon.png'
import Dermatologist from './Dermatologist.png'
import doc1 from './doc1.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import about_image from './DocAboutImage.jpg'
import docHeader_img from './DocHeader.png'
import dropdown_icon from './dropdown_icon.png'
// import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_Physician.png'
import group_profiles from './group_profiles.png'
import Gynecologist from './Gynecologist.png'
import info_icon from './info_icon.svg'
import logo from './LOGOO.png'
import menu_icon from './menu_icon.svg'
import Neurologist from './Neurologist.png'
import Pediatrician from './Pediatrician.png'
import profile_pic from './profile_pic.jpg'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import upload_icon from './upload_icon.png'
import verified_icon from './verified_icon.svg'


export const assets = {
    appointment_img,
    docHeader_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const doctorSpecialistsData = [
    {
        specialist: 'General Physician',
        imageSrc: General_physician
    },
    {
        specialist: 'Gynecologist',
        imageSrc: Gynecologist
    },
    {
        specialist: 'Dermatologist',
        imageSrc: Dermatologist
    },
    {
        specialist: 'Pediatrician',
        imageSrc: Pediatrician
    },
    {
        specialist: 'Neurologist',
        imageSrc: Neurologist
    },
    {
        specialist: 'Cardiologist',
        imageSrc: Cardiologist
    },
]

export const doctorsList = [
  {
    _id: 'd1',
    fullName: 'Dr. Zahra Rahman',
    photo: doc1,
    speciality : 'Cardiologist',
    qualification: 'MBBS, MD',
    yearsOfService: '7 Years',
    bio: 'Heart hero with a smile! Dr. Ayaan brings warmth and skill to every heartbeat he heals.',
    consultationFee: 70,
    location: {
      street: 'Lakeview Road',
      area: 'Dhanmondi, Dhaka'
    }
  },
  {
    _id: 'd2',
    fullName: 'Dr. Tasmia Anwar',
    photo: doc2,
    speciality : 'Neurologist',
    qualification: 'MBBS, DDVL',
    yearsOfService: '5 Years',
    bio: 'Skincare fairy! Dr. Meherin helps you glow from inside out with her gentle care.',
    consultationFee: 60,
    location: {
      street: 'Green Street',
      area: 'Gulshan, Dhaka'
    }
  },
  {
    _id: 'd3',
    fullName: 'Dr. Farhan Kabir',
    photo: doc3,
    speciality : 'Neurologist',
    qualification: 'MBBS, MD',
    yearsOfService: '6 Years',
    bio: 'Brainy and kind! Dr. Farhan listens deeply and heals with science and empathy.',
    consultationFee: 80,
    location: {
      street: 'Sunset Lane',
      area: 'Banani, Dhaka'
    }
  },
  {
    _id: 'd4',
    fullName: 'Dr. Arham Hossain',
    photo: doc4,
    speciality : 'Gynecologist',
    qualification: 'MBBS, FCPS',
    yearsOfService: '9 Years',
    bio: 'Caring for queens! Dr. Arifa empowers women with kindness and expert hands.',
    consultationFee: 55,
    location: {
      street: 'Maple Avenue',
      area: 'Uttara, Dhaka'
    }
  },
  {
    _id: 'd5',
    fullName: 'Dr. Arwa Chowdhury',
    photo: doc5,
    speciality : 'General Physician',
    qualification: 'MBBS, MS',
    yearsOfService: '8 Years',
    bio: 'Bone and joint superhero! Dr. Rafiq brings movement and life back with precision.',
    consultationFee: 75,
    location: {
      street: 'Victory Road',
      area: 'Mirpur, Dhaka'
    }
  },
  {
    _id: 'd6',
    fullName: 'Dr. Jarifa Tasnim ',
    photo: doc6,
    speciality : 'Pediatrician',
    qualification: 'MBBS, DCH',
    yearsOfService: '4 Years',
    bio: 'Little hearts, big care! Dr. Nisa is every child’s favorite gentle healer.',
    consultationFee: 50,
    location: {
      street: 'Rose Garden',
      area: 'Mohammadpur, Dhaka'
    }
  },
  {
    _id: 'd7',
    fullName: 'Dr. Zayaan Islam',
    photo: doc7,
    speciality : 'Dermatologist',
    qualification: 'MBBS, MS',
    yearsOfService: '5 Years',
    bio: 'Ears, nose, and throat expert! Dr. Zayaan makes breathing and hearing feel easy.',
    consultationFee: 60,
    location: {
      street: 'Palm Street',
      area: 'Bashundhara, Dhaka'
    }
  },
  {
    _id: 'd8',
    fullName: 'Dr. Imran Reza',
    photo: doc8,
    speciality : 'Pediatricians',
    qualification: 'MBBS, MD',
    yearsOfService: '6 Years',
    bio: 'Mind whisperer! Dr. Tasnim listens, understands, and helps you bloom mentally.',
    consultationFee: 90,
    location: {
      street: 'Hope Street',
      area: 'Shantinagar, Dhaka'
    }
  },
  {
    _id: 'd9',
    fullName: 'Dr. Anogh Saeed',
    photo: doc9,
    speciality : 'Dermatologist',
    qualification: 'MBBS, MS',
    yearsOfService: '7 Years',
    bio: 'Calm and clear, Dr. Imran takes care of health in the most private, respectful way.',
    consultationFee: 65,
    location: {
      street: 'Lotus Avenue',
      area: 'Malibagh, Dhaka'
    }
  },
  {
    _id: 'd10',
    fullName: 'Dr. Zaraf Islam',
    photo: doc10,
    speciality : 'Neurologist',
    qualification: 'BSc, MSc',
    yearsOfService: '3 Years',
    bio: 'Your healthy food fairy! Dr. Sabrina guides you to eat better with tasty plans.',
    consultationFee: 40,
    location: {
      street: 'Pearl Street',
      area: 'Rampura, Dhaka'
    }
  },
  {
    _id: 'd11',
    fullName: 'Dr. Fariha Noor',
    photo: doc11,
    speciality : 'General Physician',
    qualification: 'MBBS',
    yearsOfService: '4 Years',
    bio: 'Your everyday health buddy! Dr. Hasan is kind, fast, and always helpful.',
    consultationFee: 50,
    location: {
      street: 'Skyline Road',
      area: 'Farmgate, Dhaka'
    }
  },
  {
    _id: 'd12',
    fullName: 'Dr. Siam Khan',
    photo: doc12,
    speciality : 'Gyneocologist',
    qualification: 'MBBS, MD',
    yearsOfService: '6 Years',
    bio: 'Balancing hormones, balancing life! Dr. Mahira helps with PCOS, thyroid, and more.',
    consultationFee: 85,
    location: {
      street: 'Crystal Lane',
      area: 'Khilgaon, Dhaka'
    }
  },
  {
    _id: 'd13',
    fullName: 'Dr. Nushrat Anika',
    photo: doc13,
    speciality : 'Pediatrician',
    qualification: 'MBBS, DM',
    yearsOfService: '10 Years',
    bio: 'Fighting cancer with hope and heart. Dr. Omar is a warrior in a white coat.',
    consultationFee: 120,
    location: {
      street: 'Sunrise Boulevard',
      area: 'Baridhara, Dhaka'
    }
  },
  {
    _id: 'd14',
    fullName: 'Dr. Hasan Zubair',
    photo: doc14,
    speciality : 'Gynecologist',
    qualification: 'MBBS, MD',
    yearsOfService: '5 Years',
    bio: 'Breathe easy with Dr. Anika’s care. She’s your lung’s best friend.',
    consultationFee: 70,
    location: {
      street: 'Breeze Avenue',
      area: 'Tejgaon, Dhaka'
    }
  },
  {
    _id: 'd15',
    fullName: 'Dr. Jarin Hossain',
    photo: doc15,
    speciality : 'Cardiologist',
    qualification: 'BDS, MDS',
    yearsOfService: '3 Years',
    bio: 'Sparkling smiles! Dr. Tahmid makes dental visits fun and painless.',
    consultationFee: 45,
    location: {
      street: 'Smile Street',
      area: 'Kalabagan, Dhaka'
    }
  }
];
