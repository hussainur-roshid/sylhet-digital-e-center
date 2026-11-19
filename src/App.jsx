import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Monitor,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  MessageCircle,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Building2,
  Image as ImageIcon,
  Info,
  Quote
} from 'lucide-react';

// Toggleable flags
const SHOW_TESTIMONIALS = true;
const SHOW_MAP = true;

// Official Center Contact Information (Verified Sylhet Head Post Office, Bondor Bazar)
const CENTER_CONTACT = {
  phoneDisplay: '+880 1301-968454',
  phoneDisplaySecondary: '+880 1768-974739',
  directCallTel: 'tel:+8801301968454',
  whatsappNumber: '8801301968454',
  email: 'touchprocenter@gmail.com',
  mapQueryUrl: 'https://maps.app.goo.gl/g6m4Mxf5maQ4NYJZ9',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Sylhet%20Head%20Post%20Office%2C%20Bondor%20Bazar%2C%20Sylhet%203100&t=&z=17&ie=UTF8&iwloc=&output=embed'
};

// Strictly 3 Courses for TouchPro Training Center
const COURSES_DATA = [
  {
    id: 'basic-computer',
    category: 'Computer',
    categoryBn: 'কম্পিউটার',
    title: {
      en: '3-Month Basic Computer',
      bn: '৩-মাস বেসিক কম্পিউটার'
    },
    duration: {
      en: '3 Months',
      bn: '৩ মাস'
    },
    level: {
      en: 'Beginner',
      bn: 'বিগিনার'
    },
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    description: {
      en: 'Build a strong foundation in everyday computing, office productivity, and essential digital skills.',
      bn: 'দৈনন্দিন কম্পিউটার ব্যবহার, অফিস প্রোডাক্টিভিটি এবং প্রয়োজনীয় ডিজিটাল দক্ষতায় শক্ত ভিত্তি তৈরি করুন।'
    },
    highlights: {
      en: [
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Bangla Typing',
        'English Typing'
      ],
      bn: [
        'মাইক্রোসফট ওয়ার্ড',
        'মাইক্রোসফট এক্সেল',
        'মাইক্রোসফট পাওয়ার পয়েন্ট',
        'বাংলা টাইপিং',
        'ইংলিশ টাইপিং'
      ]
    },
    feeDetails: {
      courseFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      admissionFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      scheduleSteps: {
        en: [
          { tag: 'Admission & Details', amount: 'Contact Office' },
          { tag: 'Monthly Tuition', amount: 'Contact Office' },
          { tag: 'Total Course Info', amount: 'Please Contact Office' }
        ],
        bn: [
          { tag: 'ভর্তি ও বিস্তারিত', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'মাসিক বেতন', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'সর্বমোট কোর্স তথ্য', amount: 'অফিসে যোগাযোগ করুন' }
        ]
      }
    }
  },
  {
    id: 'diploma-computer',
    category: 'Computer',
    categoryBn: 'কম্পিউটার',
    title: {
      en: '6-Month Diploma in Computer',
      bn: '৬-মাস ডিপ্লোমা ইন কম্পিউটার'
    },
    duration: {
      en: '6 Months',
      bn: '৬ মাস'
    },
    level: {
      en: 'Beginner to Pro',
      bn: 'বিগিনার থেকে প্রো'
    },
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    description: {
      en: 'Comprehensive career-oriented IT training covering office applications, basic Photoshop, internet, and hardware & software.',
      bn: 'অফিস অ্যাপ্লিকেশন, বেসিক ফটোশপ, ইন্টারনেট এবং হার্ডওয়্যার ও সফটওয়্যার সমৃদ্ধ পূর্ণাঙ্গ ক্যারিয়ারমুখী আইটি প্রশিক্ষণ।'
    },
    highlights: {
      en: [
        'Microsoft Word, Excel & PowerPoint',
        'Basic Photoshop',
        'Internet & Email Operations',
        'Hardware & Software',
        'Bangla & English Typing'
      ],
      bn: [
        'মাইক্রোসফট ওয়ার্ড, এক্সেল ও পাওয়ার পয়েন্ট',
        'বেসিক ফটোশপ',
        'ইন্টারনেট ও ইমেইল ব্যবস্থাপনা',
        'হার্ডওয়্যার এবং সফটওয়্যার',
        'বাংলা ও ইংলিশ টাইপিং'
      ]
    },
    feeDetails: {
      courseFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      admissionFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      scheduleSteps: {
        en: [
          { tag: 'Admission & Details', amount: 'Contact Office' },
          { tag: 'Monthly Tuition', amount: 'Contact Office' },
          { tag: 'Total Course Info', amount: 'Please Contact Office' }
        ],
        bn: [
          { tag: 'ভর্তি ও বিস্তারিত', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'মাসিক বেতন', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'সর্বমোট কোর্স তথ্য', amount: 'অফিসে যোগাযোগ করুন' }
        ]
      }
    }
  },
  {
    id: 'graphic-design',
    category: 'Graphic Design',
    categoryBn: 'গ্রাফিক ডিজাইন',
    title: {
      en: '6-Month Graphic Design',
      bn: '৬-মাস গ্রাফিক ডিজাইন'
    },
    duration: {
      en: '6 Months',
      bn: '৬ মাস'
    },
    level: {
      en: 'Beginner to Pro',
      bn: 'বিগিনার থেকে প্রো'
    },
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80',
    description: {
      en: 'Master Adobe Photoshop, Illustrator, brand identity design, print media, and freelance-ready portfolio projects.',
      bn: 'অ্যাডোবি ফটোশপ, ইলাস্ট্রেটর, ব্র্যান্ড আইডেন্টিটি ডিজাইন, প্রিন্ট মিডিয়া এবং ফ্রিল্যান্সিং উপযোগী পোর্টফোলিও প্রজেক্টে দক্ষতা অর্জন করুন।'
    },
    highlights: {
      en: [
        'Adobe Photoshop & Illustrator Mastery',
        'Logo, Branding & Typography',
        'Social Media & Print Design',
        'Live Portfolio & Freelancing Prep'
      ],
      bn: [
        'অ্যাডোবি ফটোশপ ও ইলাস্ট্রেটর মাস্টারি',
        'লোগো, ব্র্যান্ডিং ও টাইপোগ্রাফি',
        'সোশ্যাল মিডিয়া ও প্রিন্ট ডিজাইন',
        'লাইভ পোর্টফোলিও ও ফ্রিল্যান্সিং প্রস্তুতি'
      ]
    },
    feeDetails: {
      courseFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      admissionFee: {
        en: 'Contact Office for Details',
        bn: 'বিস্তারিত জানতে অফিসে যোগাযোগ করুন'
      },
      scheduleSteps: {
        en: [
          { tag: 'Admission & Details', amount: 'Contact Office' },
          { tag: 'Monthly Tuition', amount: 'Contact Office' },
          { tag: 'Total Course Info', amount: 'Please Contact Office' }
        ],
        bn: [
          { tag: 'ভর্তি ও বিস্তারিত', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'মাসিক বেতন', amount: 'অফিসে যোগাযোগ করুন' },
          { tag: 'সর্বমোট কোর্স তথ্য', amount: 'অফিসে যোগাযোগ করুন' }
        ]
      }
    }
  }
];

// Bilingual UI Dictionary
const UI_COPY = {
  en: {
    topNotice: 'Sylhet Head Post Office, Bondor Bazar, Sylhet 3100 (Government Operated)',
    nav: {
      home: 'Home',
      courses: 'Courses',
      facilities: 'Facilities',
      gallery: 'Gallery',
      testimonials: 'Reviews',
      contact: 'Contact'
    },
    contactUsBtn: 'Contact Us',
    hero: {
      badge: 'Government-Operated Digital e-Center',
      titleStart: 'Master Practical IT Skills at',
      titleBrand: 'Sylhet Head Post Office Digital e-Center',
      subtitle:
        'Official computer training center operating under the Government inside Sylhet Head Post Office, Bondor Bazar. Completion certificates are issued directly by the Government.',
      ctaPrimary: 'Explore Courses',
      ctaSecondary: 'Visit Campus',
      campusCaption: 'Official Government Training Lab',
      campusSub: 'Sylhet Head Post Office, Bondor Bazar, Sylhet',
      stats: [
        { value: '14 Seats', label: 'Per Batch Limit' },
        { value: '3 Trainers', label: 'Dedicated Mentors' },
        { value: '100%', label: 'Lab Practical' },
        { value: 'Govt.', label: 'Official Certificate' }
      ]
    },
    coursesSection: {
      tag: 'Official Curriculum',
      title: 'Our 3 Specialized Courses',
      subtitle:
        'Select from our three structured, career-focused programs tailored to take you from beginner to confident professional.',
      filters: {
        all: 'All (3)',
        Computer: 'Computer',
        'Graphic Design': 'Graphic Design'
      },
      syllabusLabel: 'Course Modules',
      levelLabel: 'Level:',
      feeDetailsBtn: 'Course Info',
      callNowBtn: 'Call Now',
      feeModal: {
        tag: 'Course Details & Information',
        durationLabel: 'Course Duration',
        courseFeeLabel: 'Monthly Tuition Information',
        admissionFeeLabel: 'Initial Registration Info',
        paymentLabel: 'Enrollment & Details',
        stepOneTitle: '01 • Initial Admission & Registration',
        stepTwoTitle: '02 • Monthly Tuition & Schedule',
        officeNote:
          'This center operates under the Government at Sylhet Head Post Office, Bondor Bazar, Sylhet, and certificates are issued directly by the Government. Please contact the office directly for further details regarding enrollment and timing.',
        whatsappBtn: 'Ask on WhatsApp',
        callBtn: 'Call Now'
      }
    },
    whyChoose: {
      tag: 'Why Choose Us',
      title: 'Trusted Computer Education in Sylhet',
      subtitle:
        'Operating under the Government, we combine personal mentorship, structured labs, and real-world projects.',
      items: [
        {
          title: '14 Students Per Batch',
          desc: 'Each batch is strictly limited to 14 learners so our Senior and Assistant Trainers provide personal guidance to everyone.'
        },
        {
          title: 'Hands-On Practical Lab',
          desc: 'Every student gets an individual workstation for daily typing, MS Office, and Graphic Design practical sessions.'
        },
        {
          title: '3 Dedicated Trainers',
          desc: 'Continuous hands-on supervision by one experienced Senior Trainer and two skilled Assistant Trainers.'
        },
        {
          title: 'Final Exam & Govt. Certificate',
          desc: 'Structured evaluation exams at course completion with official certificates issued directly by the Government.'
        }
      ]
    },
    facilities: {
      tag: 'Campus Infrastructure',
      title: 'Our Lab Facilities',
      subtitle:
        'A calm, well-equipped learning environment at Sylhet Head Post Office, Bondor Bazar.',
      items: [
        {
          title: 'Dedicated Practice Workstations',
          desc: 'Individual desktop computers equipped with essential office and graphic design software for daily practice.'
        },
        {
          title: 'High-Speed Internet Access',
          desc: 'Reliable internet connectivity for online research, cloud tools, and digital resource exploration.'
        },
        {
          title: '3-Trainer Mentorship Team',
          desc: 'Dedicated support from one Senior Trainer and two Assistant Trainers during every practical lab class.'
        }
      ]
    },
    instructors: {
      tag: 'Leadership & Training Team',
      title: 'Meet Our Trainers & Leadership',
      subtitle:
        'Guided by our dedicated Director, experienced Senior Trainer, and two hands-on Assistant Trainers.',
      seniorTrainer: {
        name: 'Boloram Banik',
        role: 'Entrepreneur & Director',
        focus: 'M.S.S (Political Science), M. C College, Sylhet',
        subRole: 'Director, Zakiganj Upazila Post E-Center, Zakiganj, Sylhet',
        phone: '+880 1768-974739',
        image:'https://iili.io/o3yRqqN.jpg',
        desc: 'Entrepreneur & Director leading Sylhet Head Post Office Digital e-Center and Zakiganj Upazila Post E-Center with a commitment to accessible, quality IT education.'
      },
      teamMembers: [
        {
          name: 'Layes Ahmad',
          role: 'Senior Trainer',
          focus: 'Computer Expert & Basic and Higher Diploma Trainer',
          phone: '+880 1301-968454',
          image: 'https://iili.io/oHKPNSa.jpg',
          desc: 'Senior Trainer & Computer Expert guiding students through Basic Computer, Diploma in Computer, and practical office applications.'
        },
        {
          name: 'Kamal Ahmed',
          role: 'Assistant Trainer (Male)',
          focus: 'Diploma Trainer for Basic and Higher-level Courses',
          image: 'https://iili.io/o3ysOpp.jpg',
          desc: 'Assistant Trainer (Male) specializing as a Diploma Trainer for Basic and Higher-level Computer courses and hands-on lab sessions.'
        },
        {
          name: 'Jamila Begum',
          role: "Assistant Trainer (Women's Program)",
          focus: 'Basic & Higher-Level Computer and Graphic Design Trainer',
          image: 'https://iili.io/o3yUSg2.png',
          desc: "Dedicated trainer for the Women's Program, teaching Basic & Higher-level Computer courses as well as Graphic Design.",
        }
      ]
    },
    gallery: {
      tag: 'Campus Glimpse',
      title: 'Training Lab & Learning Environment',
      subtitle:
        'Explore our practical computer lab setup and creative design workspace.',
      items: [
        {
          caption: 'Computer Lab & Office Software Training',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
        },
        {
          caption: 'Guided Practical Sessions (14-Seat Batches)',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
        },
        {
          caption: 'Graphic Design & Creative Studio',
          image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    testimonials: {
      tag: 'Student Reviews',
      title: 'What Our Students Say',
      subtitle:
        'Feedback from graduates of our long-established training center in Bondor Bazar, Sylhet.',
      items: [
        {
          name: 'Hussainur Roshid',
          role: '৬ মাসের Higher Diploma in Computer Course',
          phone: '+880 1301-968454',
          isDemo: false,
          quote:
            'আমি TechPro Computer Training Center থেকে ৬ মাসের Higher Diploma in Computer Course সম্পন্ন করেছি। এখানে কম্পিউটারের বিভিন্ন বিষয় খুব সহজভাবে শেখানো হয়েছে। শিক্ষকদের আন্তরিক সহযোগিতা এবং নিয়মিত প্র্যাকটিসের মাধ্যমে আমার কম্পিউটার দক্ষতা অনেক উন্নত হয়েছে। বিশেষ করে ব্যবহারিক ক্লাসগুলো আমার কাছে অনেক ভালো লেগেছে। TechPro-এর পুরো টিমকে ধন্যবাদ।'
        },
        {
          name: 'Tanvir Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এখানকার প্র্যাকটিক্যাল ক্লাসগুলো সত্যিই অসাধারণ। এমএস ওয়ার্ড ও এক্সেলের জটিল কাজগুলো শিক্ষকরা খুব ধৈর্য নিয়ে হাতে-কলমে শিখিয়েছেন।'
        },
        {
          name: 'Nusrat Jahan',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'গ্রাফিক ডিজাইনের বেসিক থেকে শুরু করে লোগো ও ব্যানার ডিজাইন পর্যন্ত প্রতিটি ক্লাস ছিল খুবই তথ্যবহুল। ফটোশপ ও ইলাস্ট্রেটরে আমার আত্মবিশ্বাস অনেক বেড়েছে।'
        },
        {
          name: 'Mahmudul Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'মাত্র তিন মাসে বাংলা ও ইংলিশ টাইপিং এবং অফিস অ্যাপ্লিকেশনে দারুণ দক্ষতা অর্জন করেছি। নতুনদের জন্য এটি একটি নির্ভরযোগ্য প্রতিষ্ঠান।'
        },
        {
          name: 'Sumaiya Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'প্রতিটি শিক্ষার্থীর জন্য আলাদা কম্পিউটার থাকায় ক্লাসেই সব কাজ অনুশীলন করা যায়। শিক্ষকদের আন্তরিক ব্যবহার আমাকে মুগ্ধ করেছে।'
        },
        {
          name: 'Sakib Hossain',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের পরিবেশ অত্যন্ত শান্ত ও সুশৃঙ্খল। নিয়মিত মডেল টেস্ট ও প্র্যাকটিস সেশনের কারণে অফিসের কাজের জন্য নিজেকে প্রস্তুত করতে পেরেছি।'
        },
        {
          name: 'Jannatul Ferdous',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'অ্যাডোবি ইলাস্ট্রেটরের টুলসগুলো এত সহজভাবে শেখানো হয়েছে যে এখন আমি নিজেই ভিজিটিং কার্ড ও পোস্টার ডিজাইন করতে পারি।'
        },
        {
          name: 'Rakibul Islam',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কম্পিউটার সম্পর্কে আগে তেমন ধারণা ছিল না, কিন্তু এখানকার প্রশিক্ষকদের গাইডলাইনে খুব অল্প সময়েই প্রয়োজনীয় সব কাজ শিখে ফেলেছি।'
        },
        {
          name: 'Tasnim Rahman',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এমএস এক্সেলের ফর্মুলা ও ডেটা এন্ট্রির কাজগুলো বাস্তব উদাহরণের মাধ্যমে শেখানো হয়, যা চাকরির ক্ষেত্রে অনেক কাজে লাগে।'
        },
        {
          name: 'Abdullah Al Mamun',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ব্যাচে সীমিত সংখ্যক শিক্ষার্থী থাকায় প্রতিটি সমস্যার সমাধান সাথে সাথেই পাওয়া যায়। শেখার মান নিয়ে আমি শতভাগ সন্তুষ্ট।'
        },
        {
          name: 'Sadia Afrin',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'কালার কম্বিনেশন ও টাইপোগ্রাফির খুঁটিনাটি বিষয়গুলো খুব সুন্দরভাবে বোঝানো হয়েছে। প্রজেক্ট ভিত্তিক ক্লাসগুলো আমার সবচেয়ে ভালো লেগেছে।'
        },
        {
          name: 'Mehedi Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সময়মতো ক্লাস শুরু হওয়া এবং নিয়মিত হোমওয়ার্ক যাচাই করার পদ্ধতিটি দারুণ। তিন মাসের কোর্সটি আমার জন্য খুবই ফলপ্রসূ ছিল।'
        },
        {
          name: 'Farzana Yasmin',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ইমেইল পরিচালনা, ইন্টারনেট ব্রাউজিং ও অফিস ডকুমেন্ট তৈরির প্রতিটি ধাপ খুব যত্ন সহকারে শেখানো হয়েছে।'
        },
        {
          name: 'Arif Hossain',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'হার্ডওয়্যার ও সফটওয়্যারের প্রাথমিক ধারণা থেকে শুরু করে অ্যাডভান্সড অফিস অ্যাপ্লিকেশন—সবকিছুই এখানে গোছানোভাবে শেখানো হয়।'
        },
        {
          name: 'Mim Akter',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বিজয় বাংলা টাইপিং নিয়ে আগে খুব ভয় পেতাম, কিন্তু নিয়মিত ল্যাব প্র্যাকটিসের ফলে এখন দ্রুত টাইপ করতে পারি।'
        },
        {
          name: 'Saiful Islam',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটোশপে ছবি এডিটিং ও সোশ্যাল মিডিয়া ব্যানার ডিজাইনের অনেক কৌশল এখান থেকে শিখেছি। প্রশিক্ষকরা সবসময় উৎসাহ দেন।'
        },
        {
          name: 'Nabila Sultana',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'মেয়েদের জন্য নিরাপদ ও স্বাচ্ছন্দ্যময় শেখার পরিবেশ রয়েছে। কোনো বিষয় না বুঝলে শিক্ষকরা বারবার বুঝিয়ে দেন।'
        },
        {
          name: 'Imran Ahmed',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সাশ্রয়ী কোর্স ফিতে এত ভালো মানের ব্যবহারিক প্রশিক্ষণ সত্যিই প্রশংসনীয়। আমি আমার বন্ধুদেরও এখানে ভর্তির পরামর্শ দিয়েছি।'
        },
        {
          name: 'Sharmin Akter',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'প্রিন্ট মিডিয়া ও ব্র্যান্ডিং ডিজাইনের ওপর হাতে-কলমে প্রজেক্ট করার সুযোগ পেয়েছি, যা আমার পোর্টফোলিও সমৃদ্ধ করেছে।'
        },
        {
          name: 'Fahim Rahman',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'থিওরির চেয়ে ব্যবহারিক ক্লাসে বেশি গুরুত্ব দেওয়া হয় বলে শেখাটা অনেক সহজ ও আনন্দদায়ক হয়েছে।'
        },
        {
          name: 'Tanjina Begum',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'পাওয়ার পয়েন্ট প্রেজেন্টেশন তৈরির ক্লাসগুলো আমার বিশ্ববিদ্যালয়ের অ্যাসাইনমেন্টে অনেক সাহায্য করেছে।'
        },
        {
          name: 'Rifat Chowdhury',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রতিটি ক্লাসে নতুন কিছু শেখার সুযোগ থাকে। ল্যাবের কম্পিউটারগুলো সচল ও দ্রুতগতির হওয়ায় কাজ করতে কোনো অসুবিধা হয় না।'
        },
        {
          name: 'Mst. Jannat Ara',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'শূন্য থেকে গ্রাফিক ডিজাইন শিখে আজ আমি নিজের মতো করে বিভিন্ন ডিজাইন তৈরি করতে পারছি। শিক্ষকদের প্রতি কৃতজ্ঞ।'
        },
        {
          name: 'Shakil Ahmed',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অফিসিয়াল চিঠিপত্র ফরম্যাটিং এবং টেবিল তৈরির কাজগুলো খুব পরিষ্কারভাবে শেখানো হয়েছে।'
        },
        {
          name: 'Lamia Islam',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কোর্স শেষে ফাইনাল মূল্যায়ন পরীক্ষা ও সার্টিফিকেট প্রদানের প্রক্রিয়াটি খুবই স্বচ্ছ ও পেশাদার।'
        },
        {
          name: 'Abdur Rahman',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ছয় মাসের এই কোর্সটি করার পর কম্পিউটার পরিচালনায় আমার জড়তা পুরোপুরি কেটে গেছে।'
        },
        {
          name: 'Ruma Akter',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'শিক্ষকদের বন্ধুত্বপূর্ণ আচরণ এবং নিয়মিত তত্ত্বাবধান আমাকে প্রতিদিন ক্লাসে আসতে অনুপ্রাণিত করেছে।'
        },
        {
          name: 'Anik Das',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ইলাস্ট্রেটরে ভেক্টর আর্ট ও লোগো তৈরির কৌশলগুলো হাতে-কলমে শেখার দারুণ অভিজ্ঞতা হয়েছে এখানে।'
        },
        {
          name: 'Sumi Akter',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বেসিক Photoshop থেকে শুরু করে MS Office-এর সব গুরুত্বপূর্ণ কাজ এই কোর্সে সুন্দরভাবে কভার করা হয়েছে।'
        },
        {
          name: 'Kamrul Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'যারা অল্প সময়ে অফিসের প্রয়োজনীয় কম্পিউটার দক্ষতা অর্জন করতে চান, তাদের জন্য এটি সেরা জায়গা।'
        },
        {
          name: 'Priya Das',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'প্রতিটি অ্যাসাইনমেন্টের ওপর শিক্ষকদের গঠনমূলক মতামত আমার ডিজাইনের মান অনেক উন্নত করেছে।'
        },
        {
          name: 'Joynal Abedin',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'বাস্তব কর্মক্ষেত্রের উপযোগী করে সিলেবাস সাজানো হয়েছে। প্রতিটি মডিউল শেষে প্র্যাকটিস টেস্ট নেওয়া হয়।'
        },
        {
          name: 'Tamanna Rahman',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বাংলা ও ইংরেজি উভয় ভাষায় নির্ভুল টাইপিং শেখার জন্য এখানকার ল্যাব সেশনগুলো অত্যন্ত কার্যকর।'
        },
        {
          name: 'Asif Mahmud',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এক্সেলের চার্ট, ফিল্টার ও হিসাব-নিকাশের কাজগুলো এত সহজভাবে বুঝিয়ে দেওয়া হয়েছে যে এখন আর কোনো সমস্যা হয় না।'
        },
        {
          name: 'Rashedul Islam',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটোশপ ও ইলাস্ট্রেটরের শর্টকাট ও প্রফেশনাল ওয়ার্কফ্লো শেখার ফলে কাজের গতি অনেক বেড়েছে।'
        },
        {
          name: 'Mahiya Chowdhury',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'খুবই গোছানো পাঠ্যক্রম এবং আন্তরিক প্রশিক্ষক টিম। তিন মাসে অনেক কিছু শিখতে পেরেছি।'
        },
        {
          name: 'Sohel Rana',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'কম্পিউটারের মৌলিক ধারণা থেকে অ্যাডভান্সড অ্যাপ্লিকেশন পর্যন্ত প্রতিটি বিষয়ে পূর্ণাঙ্গ সাপোর্ট পেয়েছি।'
        },
        {
          name: 'Tania Sultana',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের বাইরেও ল্যাবে প্র্যাকটিস করার সুযোগ থাকায় কঠিন বিষয়গুলো সহজে আয়ত্ত করতে পেরেছি।'
        },
        {
          name: 'Shuvo Ahmed',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'সোশ্যাল মিডিয়া পোস্ট, ফ্লায়ার ও ব্রোশিওর ডিজাইনের বাস্তব প্রজেক্টগুলো আমাকে ফ্রিল্যান্সিংয়ের পথে এগিয়ে দিয়েছে।'
        },
        {
          name: 'Ayesha Siddika',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'পরিচ্ছন্ন ল্যাব ও সুশৃঙ্খল পরিবেশের কারণে পড়াশোনায় মনোযোগ ধরে রাখা খুব সহজ হয়।'
        },
        {
          name: 'Al Amin',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ইন্টারনেট ও ইমেইল ব্যবস্থাপনা এবং অফিস সফটওয়্যারের ব্যবহারিক ক্লাসগুলো আমার চাকরির ভাইভায় দারুণ কাজে দিয়েছে।'
        },
        {
          name: 'Monira Begum',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'নারী শিক্ষার্থীদের জন্য বিশেষ যত্ন ও সহায়ক পরিবেশ থাকায় নির্দ্বিধায় সব প্রশ্ন করতে পেরেছি।'
        },
        {
          name: 'Fahad Hossain',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রতিদিন নির্দিষ্ট টার্গেট দিয়ে টাইপিং ও অফিসের কাজ শেখানো হয়, ফলে অগ্রগতি নিজেই বোঝা যায়।'
        },
        {
          name: 'Rukaiya Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ছয় মাসের ডিপ্লোমা কোর্সটি আমার ডিজিটাল দক্ষতাকে এক নতুন উচ্চতায় নিয়ে গেছে।'
        },
        {
          name: 'Nayeem Islam',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রশিক্ষকদের বোঝানোর ধরন খুব প্রাঞ্জল। কঠিন টপিকগুলোও সহজ উদাহরণ দিয়ে পরিষ্কার করে দেন।'
        },
        {
          name: 'Sumon Mia',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ডিজাইনের সেন্স ও সফটওয়্যার স্কিল—দুটিই সমান গুরুত্ব দিয়ে শেখানো হয় এখানে।'
        },
        {
          name: 'Raisa Jahan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এমএস ওয়ার্ডে রিপোর্ট তৈরি ও এক্সেলে ডেটা সাজানোর কাজগুলো এখন খুব আত্মবিশ্বাসের সাথে করতে পারি।'
        },
        {
          name: 'Emon Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'নিয়মিত উপস্থিতি ও প্র্যাকটিক্যাল পরীক্ষার মাধ্যমে শিক্ষার্থীদের প্রকৃত দক্ষতা যাচাই করা হয়।'
        },
        {
          name: 'Nusrat Tabassum',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটো রিটাচিং ও ব্যাকগ্রাউন্ড রিমুভালের কাজগুলো খুব নিখুঁতভাবে শেখানো হয়েছে।'
        },
        {
          name: 'Sabbir Hossain',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অল্প খরচে মানসম্মত কম্পিউটার প্রশিক্ষণ নেওয়ার জন্য এটি একটি আদর্শ প্রতিষ্ঠান।'
        },
        {
          name: 'Sohana Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'পুরো কোর্স জুড়ে শিক্ষকদের আন্তরিক দিকনির্দেশনা পেয়েছি। ব্যবহারিক ল্যাব সুবিধা সত্যিই চমৎকার।'
        },
        {
          name: 'Faisal Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অফিস অটোমেশন ও বেসিক ফটোশপ একসাথে শেখার সুযোগ থাকায় কোর্সটি খুবই উপকারী মনে হয়েছে।'
        },
        {
          name: 'Afrin Sultana',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের প্রতিটি প্রজেক্ট শেষ করার পর শিক্ষকদের ফিডব্যাক আমাকে আরও ভালো ডিজাইন করতে অনুপ্রাণিত করেছে।'
        },
        {
          name: 'Tahmid Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কম্পিউটারের বেসিক অপারেশন ও অফিস সফটওয়্যারে শক্ত ভিত্তি গড়তে এই কোর্সটি দারুণ সহায়ক।'
        },
        {
          name: 'Shakib Rahman',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সুশৃঙ্খল ক্লাস রুটিন, অভিজ্ঞ প্রশিক্ষক এবং পর্যাপ্ত প্র্যাকটিস সুবিধার জন্য পুরো টিমকে ধন্যবাদ।'
        }
      ]
    },
    contact: {
      tag: 'Get in Touch',
      title: 'Contact & Location',
      subtitle:
        'Visit our Government-operated center at Sylhet Head Post Office, Bondor Bazar, or contact us directly via phone or WhatsApp.',
      visitTitle: 'Visit Sylhet Head Post Office Digital e-Center',
      directorLabel: 'Entrepreneur & Director',
      directorName: 'Boloram Banik',
      directorQualification: 'M.S.S (Political Science), M. C College, Sylhet',
      directorRole: 'Director, Zakiganj Upazila Post E-Center, Zakiganj, Sylhet',
      addressLabel: 'Address',
      addressValue: 'Sylhet Head Post Office, Bondor Bazar, Sylhet 3100',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      hoursLabel: 'Opening Hours',
      hoursValue: 'Sun – Thu: 9:00 AM – 6:00 PM',
      hoursClosed: 'Friday: Closed',
      instituteInfoLabel: 'Government Affiliation & Certification',
      instituteAffiliation: 'Operates under the Government of Bangladesh (Bangladesh Post Office)',
      batchLimitInfo: 'Maximum 14 students per batch',
      examPolicyInfo:
        'Final examination conducted and official certificate issued directly by the Government',
      callNowBtn: 'Call Now',
      whatsappBtn: 'WhatsApp',
      visitCenterBtn: 'Open Google Maps',
      mapTitle: 'Campus Location Map (Sylhet Head Post Office)',
      formTitle: 'Course Admission Inquiry',
      formNotice:
        'Select any of our 3 courses below and send your inquiry directly to Sylhet Head Post Office Digital e-Center on WhatsApp.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      interestLabel: 'Select Course',
      messageLabel: 'Message / Preferred Batch Time',
      messagePlaceholder: 'Write your preferred batch time or question about the course...',
      sendBtn: 'Send Message via WhatsApp'
    },
    footer: {
      tagline:
        'Operating under the Government at Sylhet Head Post Office, Bondor Bazar—empowering learners with practical computer and graphic design skills with Government-issued certificates.',
      quickLinks: 'Quick Links',
      connect: 'Contact Info',
      copyright: '© 2026 Sylhet Head Post Office Digital e-Center. All rights reserved.',
      designedFor: 'Government-Operated Center • Sylhet Head Post Office, Bondor Bazar, Sylhet 3100.'
    }
  },
  bn: {
    topNotice: 'সিলেট হেড পোস্ট অফিস, বন্দরবাজার, সিলেট ৩১০০ (সরকারিভাবে পরিচালিত)',
    nav: {
      home: 'হোম',
      courses: 'কোর্সসমূহ',
      facilities: 'সুবিধাসমূহ',
      gallery: 'গ্যালারি',
      testimonials: 'সাফল্যের গল্প',
      contact: 'যোগাযোগ'
    },
    contactUsBtn: 'যোগাযোগ করুন',
    hero: {
      badge: 'সরকারি ব্যবস্থাপনায় পরিচালিত ডিজিটাল ই-সেন্টার',
      titleStart: 'দক্ষতা অর্জন করুন',
      titleBrand: 'সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টারে',
      subtitle:
        'সিলেট হেড পোস্ট অফিসের ভেতরে বন্দরবাজারে সরকারি তত্ত্বাবধানে পরিচালিত অফিশিয়াল কম্পিউটার প্রশিক্ষণ কেন্দ্র। কোর্স শেষে সরাসরি সরকার কর্তৃক সনদ প্রদান করা হয়।',
      ctaPrimary: 'কোর্সগুলো দেখুন',
      ctaSecondary: 'সেন্টার ভিজিট করুন',
      campusCaption: 'অফিসিয়াল সরকারি ট্রেনিং ল্যাব',
      campusSub: 'সিলেট হেড পোস্ট অফিস, বন্দরবাজার, সিলেট',
      stats: [
        { value: '১৪ জন', label: 'প্রতি ব্যাচ সীমা' },
        { value: '৩ জন', label: 'অভিজ্ঞ ট্রেইনার' },
        { value: '১০০%', label: 'হাতে-কলমে ল্যাব' },
        { value: 'সরকারি', label: 'অফিসিয়াল সার্টিফিকেট' }
      ]
    },
    coursesSection: {
      tag: 'পাঠ্যক্রম',
      title: 'আমাদের ৩টি বিশেষায়িত কোর্স',
      subtitle:
        'বিগিনার থেকে আত্মবিশ্বাসী পেশাজীবী হিসেবে গড়ে তুলতে আমাদের তিনটি ক্যারিয়ারমুখী কোর্স থেকে আপনার পছন্দের কোর্সটি বেছে নিন।',
      filters: {
        all: 'সবগুলো (৩)',
        Computer: 'কম্পিউটার',
        'Graphic Design': 'গ্রাফিক ডিজাইন'
      },
      syllabusLabel: 'কোর্সের মূল বিষয়সমূহ',
      levelLabel: 'লেভেল:',
      feeDetailsBtn: 'কোর্সের তথ্য',
      callNowBtn: 'কল করুন',
      feeModal: {
        tag: 'কোর্সের তথ্য ও বিস্তারিত',
        durationLabel: 'কোর্সের মেয়াদ',
        courseFeeLabel: 'মাসিক বেতন তথ্য',
        admissionFeeLabel: 'প্রাথমিক ভর্তি তথ্য',
        paymentLabel: 'ভর্তি ও বিস্তারিত তথ্য',
        stepOneTitle: '০১ • প্রাথমিক ভর্তি ও নিবন্ধন',
        stepTwoTitle: '০২ • মাসিক বেতন ও সময়সূচি',
        officeNote:
          'এই প্রতিষ্ঠানটি সরকারের অধীনে পরিচালিত এবং কোর্স শেষে সার্টিফিকেট সরাসরি সরকার কর্তৃক প্রদান করা হয়। ভর্তি ও অন্যান্য বিস্তারিত তথ্যের জন্য অনুগ্রহ করে অফিসে যোগাযোগ করুন।',
        whatsappBtn: 'হোয়াটসঅ্যাপে জিজ্ঞাসা করুন',
        callBtn: 'সরাসরি কল করুন'
      }
    },
    whyChoose: {
      tag: 'কেন আমাদের বেছে নেবেন',
      title: 'সরকারি তত্ত্বাবধানে বিশ্বস্ত কম্পিউটার শিক্ষা প্রতিষ্ঠান',
      subtitle:
        'সরকারের অধীনে পরিচালিত এই প্রতিষ্ঠানে ব্যক্তিগত মেন্টরশিপ, আধুনিক ল্যাব এবং বাস্তব প্রজেক্টের সমন্বয়ে প্রশিক্ষণ প্রদান করা হয়।',
      items: [
        {
          title: 'প্রতি ব্যাচে ১৪ জন শিক্ষার্থী',
          desc: 'প্রতি ব্যাচে সর্বোচ্চ ১৪ জন শিক্ষার্থী নেওয়া হয়, যাতে সিনিয়র ও সহকারী প্রশিক্ষকরা সবাইকে আলাদাভাবে যত্ন নিতে পারেন।'
        },
        {
          title: 'হ্যান্ডস-অন প্র্যাকটিক্যাল ল্যাব',
          desc: 'প্রতিটি শিক্ষার্থীর জন্য আলাদা কম্পিউটারে টাইপিং, এমএস অফিস এবং গ্রাফিক ডিজাইনের নিয়মিত অনুশীলনের সুযোগ।'
        },
        {
          title: 'দক্ষ ৩ জন প্রশিক্ষক টিম',
          desc: 'একজন অভিজ্ঞ সিনিয়র ট্রেইনার এবং দুজন সহকারী ট্রেইনারের সার্বক্ষণিক তত্ত্বাবধানে হাতে-কলমে শেখার সুবিধা।'
        },
        {
          title: 'ফাইনাল পরীক্ষা ও সরকারি সনদপত্র',
          desc: 'প্রতিটি কোর্স শেষে মূল্যায়ন পরীক্ষা এবং সরাসরি সরকার কর্তৃক প্রদত্ত অফিশিয়াল সার্টিফিকেট প্রদান করা হয়।'
        }
      ]
    },
    facilities: {
      tag: 'ক্যাম্পাস সুবিধা',
      title: 'আমাদের ল্যাব সুবিধাসমূহ',
      subtitle:
        'সিলেট হেড পোস্ট অফিস, বন্দরবাজারে অবস্থিত মনোরম ও সুসজ্জিত প্রশিক্ষণ পরিবেশ।',
      items: [
        {
          title: 'নির্ধারিত প্র্যাকটিস ওয়ার্কস্টেশন',
          desc: 'দৈনন্দিন অনুশীলনের জন্য প্রয়োজনীয় অফিস ও গ্রাফিক ডিজাইন সফটওয়্যার সমৃদ্ধ আলাদা কম্পিউটার।'
        },
        {
          title: 'হাই-স্পিড ইন্টারনেট সুবিধা',
          desc: 'অনলাইন রিসার্চ, ক্লাউড টুলস এবং ডিজিটাল রিসোর্স ব্যবহারের জন্য নিরবচ্ছিন্ন ইন্টারনেট সংযোগ।'
        },
        {
          title: '৩ জন প্রশিক্ষকের নিবিড় তত্ত্বাবধান',
          desc: 'একজন সিনিয়র ট্রেইনার ও দুজন অ্যাসিস্ট্যান্ট ট্রেইনারের মাধ্যমে প্রতিটি ক্লাসে সার্বক্ষণিক সহায়তা।'
        }
      ]
    },
    instructors: {
      tag: 'পরিচালনা ও প্রশিক্ষকবৃন্দ',
      title: 'আমাদের প্রশিক্ষক ও পরিচালকবৃন্দ',
      subtitle:
        'আমাদের সম্মানিত পরিচালক, অভিজ্ঞ সিনিয়র ট্রেইনার এবং দুজন দক্ষ সহকারী ট্রেইনারের সমন্বয়ে আমাদের প্রশিক্ষণ টিম।',
      seniorTrainer: {
        name: 'বলরাম বণিক (Balaram Banik)',
        role: 'উদ্যোক্তা ও পরিচালক',
        focus: 'এম.এস.এস (রাষ্ট্রবিজ্ঞান), এম. সি কলেজ, সিলেট',
        subRole: 'পরিচালক, জকিগঞ্জ উপজেলা পোস্ট ই-সেন্টার, জকিগঞ্জ, সিলেট',
        phone: '+880 1768-974739',
        image: 'https://iili.io/o3yRqqN.jpg',
        desc: 'উদ্যোক্তা ও পরিচালক হিসেবে সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টার এবং জকিগঞ্জ উপজেলা পোস্ট ই-সেন্টারের মাধ্যমে মানসম্মত আইটি ও কম্পিউটার প্রশিক্ষণ নিশ্চিত করছেন।'
      },
      teamMembers: [
        {
          name: 'লায়েছ আহমেদ (Layes Ahmad)',
          role: 'সিনিয়র ট্রেইনার',
          focus: 'কম্পিউটার এক্সপার্ট এবং বেসিক ও হায়ার ডিপ্লোমা ট্রেইনার',
          phone: '+880 1301-968454',
          image: 'https://iili.io/oHKPNSa.jpg',
          desc: 'সিনিয়র ট্রেইনার ও কম্পিউটার এক্সপার্ট হিসেবে বেসিক কম্পিউটার, ডিপ্লোমা ইন কম্পিউটার এবং প্র্যাকটিক্যাল অফিস অ্যাপ্লিকেশন প্রশিক্ষণ পরিচালনা করছেন।'
        },
        {
          name: 'কামাল আহমেদ (Kamal Ahmed)',
          role: 'অ্যাসিস্ট্যান্ট ট্রেইনার (পুরুষ)',
          focus: 'বেসিক ও হায়ার-লেভেল কোর্সের ডিপ্লোমা ট্রেইনার',
          image: 'https://iili.io/o3ysOpp.jpg',
          desc: 'অ্যাসিস্ট্যান্ট ট্রেইনার (পুরুষ) এবং বেসিক ও হায়ার-লেভেল কম্পিউটার কোর্সের ডিপ্লোমা ট্রেইনার হিসেবে প্র্যাকটিক্যাল প্রশিক্ষণ পরিচালনা করছেন।'
        },
        {
          name: 'জামিলা বেগম (Jamila Begum)',
          role: 'অ্যাসিস্ট্যান্ট ট্রেইনার (উইমেন্স প্রোগ্রাম)',
          focus: 'বেসিক ও হায়ার কম্পিউটার এবং গ্রাফিক ডিজাইন ট্রেইনার',
          image: 'https://iili.io/o3yUSg2.png',
          desc: 'উইমেন্স প্রোগ্রামের প্রশিক্ষক হিসেবে বেসিক ও হায়ার লেভেল কম্পিউটার কোর্স এবং গ্রাফিক ডিজাইন প্রশিক্ষণ পরিচালনা করছেন।',
        }
      ]
    },
    gallery: {
      tag: 'ক্যাম্পাস ঝলক',
      title: 'ট্রেনিং ল্যাব ও শিক্ষার পরিবেশ',
      subtitle:
        'আমাদের প্র্যাকটিক্যাল কম্পিউটার ল্যাব এবং ক্রিয়েটিভ ডিজাইন ওয়ার্কস্পেসের এক ঝলক।',
      items: [
        {
          caption: 'কম্পিউটার ল্যাব ও অফিস সফটওয়্যার প্রশিক্ষণ',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
        },
        {
          caption: 'গাইডেড প্র্যাকটিক্যাল ল্যাব সেশন (১৪ জনের ব্যাচ)',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
        },
        {
          caption: 'গ্রাফিক ডিজাইন ও ক্রিয়েটিভ স্টুডিও',
          image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    testimonials: {
      tag: 'শিক্ষার্থীদের মতামত',
      title: 'আমাদের শিক্ষার্থীরা যা বলেন',
      subtitle:
        'বন্দরবাজার, সিলেটের আমাদের সুপ্রতিষ্ঠিত প্রশিক্ষণ কেন্দ্রের শিক্ষার্থীদের মতামত।',
      items: [
        {
          name: 'Hussainur Roshid',
          role: '৬ মাসের Higher Diploma in Computer Course',
          phone: '+880 1301-968454',
          isDemo: false,
          quote:
            'আমি TechPro Computer Training Center থেকে ৬ মাসের Higher Diploma in Computer Course সম্পন্ন করেছি। এখানে কম্পিউটারের বিভিন্ন বিষয় খুব সহজভাবে শেখানো হয়েছে। শিক্ষকদের আন্তরিক সহযোগিতা এবং নিয়মিত প্র্যাকটিসের মাধ্যমে আমার কম্পিউটার দক্ষতা অনেক উন্নত হয়েছে। বিশেষ করে ব্যবহারিক ক্লাসগুলো আমার কাছে অনেক ভালো লেগেছে। TechPro-এর পুরো টিমকে ধন্যবাদ।'
        },
        {
          name: 'Tanvir Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এখানকার প্র্যাকটিক্যাল ক্লাসগুলো সত্যিই অসাধারণ। এমএস ওয়ার্ড ও এক্সেলের জটিল কাজগুলো শিক্ষকরা খুব ধৈর্য নিয়ে হাতে-কলমে শিখিয়েছেন।'
        },
        {
          name: 'Nusrat Jahan',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'গ্রাফিক ডিজাইনের বেসিক থেকে শুরু করে লোগো ও ব্যানার ডিজাইন পর্যন্ত প্রতিটি ক্লাস ছিল খুবই তথ্যবহুল। ফটোশপ ও ইলাস্ট্রেটরে আমার আত্মবিশ্বাস অনেক বেড়েছে।'
        },
        {
          name: 'Mahmudul Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'মাত্র তিন মাসে বাংলা ও ইংলিশ টাইপিং এবং অফিস অ্যাপ্লিকেশনে দারুণ দক্ষতা অর্জন করেছি। নতুনদের জন্য এটি একটি নির্ভরযোগ্য প্রতিষ্ঠান।'
        },
        {
          name: 'Sumaiya Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'প্রতিটি শিক্ষার্থীর জন্য আলাদা কম্পিউটার থাকায় ক্লাসেই সব কাজ অনুশীলন করা যায়। শিক্ষকদের আন্তরিক ব্যবহার আমাকে মুগ্ধ করেছে।'
        },
        {
          name: 'Sakib Hossain',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের পরিবেশ অত্যন্ত শান্ত ও সুশৃঙ্খল। নিয়মিত মডেল টেস্ট ও প্র্যাকটিস সেশনের কারণে অফিসের কাজের জন্য নিজেকে প্রস্তুত করতে পেরেছি।'
        },
        {
          name: 'Jannatul Ferdous',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'অ্যাডোবি ইলাস্ট্রেটরের টুলসগুলো এত সহজভাবে শেখানো হয়েছে যে এখন আমি নিজেই ভিজিটিং কার্ড ও পোস্টার ডিজাইন করতে পারি।'
        },
        {
          name: 'Rakibul Islam',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কম্পিউটার সম্পর্কে আগে তেমন ধারণা ছিল না, কিন্তু এখানকার প্রশিক্ষকদের গাইডলাইনে খুব অল্প সময়েই প্রয়োজনীয় সব কাজ শিখে ফেলেছি।'
        },
        {
          name: 'Tasnim Rahman',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এমএস এক্সেলের ফর্মুলা ও ডেটা এন্ট্রির কাজগুলো বাস্তব উদাহরণের মাধ্যমে শেখানো হয়, যা চাকরির ক্ষেত্রে অনেক কাজে লাগে।'
        },
        {
          name: 'Abdullah Al Mamun',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ব্যাচে সীমিত সংখ্যক শিক্ষার্থী থাকায় প্রতিটি সমস্যার সমাধান সাথে সাথেই পাওয়া যায়। শেখার মান নিয়ে আমি শতভাগ সন্তুষ্ট।'
        },
        {
          name: 'Sadia Afrin',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'কালার কম্বিনেশন ও টাইপোগ্রাফির খুঁটিনাটি বিষয়গুলো খুব সুন্দরভাবে বোঝানো হয়েছে। প্রজেক্ট ভিত্তিক ক্লাসগুলো আমার সবচেয়ে ভালো লেগেছে।'
        },
        {
          name: 'Mehedi Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সময়মতো ক্লাস শুরু হওয়া এবং নিয়মিত হোমওয়ার্ক যাচাই করার পদ্ধতিটি দারুণ। তিন মাসের কোর্সটি আমার জন্য খুবই ফলপ্রসূ ছিল।'
        },
        {
          name: 'Farzana Yasmin',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ইমেইল পরিচালনা, ইন্টারনেট ব্রাউজিং ও অফিস ডকুমেন্ট তৈরির প্রতিটি ধাপ খুব যত্ন সহকারে শেখানো হয়েছে।'
        },
        {
          name: 'Arif Hossain',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'হার্ডওয়্যার ও সফটওয়্যারের প্রাথমিক ধারণা থেকে শুরু করে অ্যাডভান্সড অফিস অ্যাপ্লিকেশন—সবকিছুই এখানে গোছানোভাবে শেখানো হয়।'
        },
        {
          name: 'Mim Akter',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বিজয় বাংলা টাইপিং নিয়ে আগে খুব ভয় পেতাম, কিন্তু নিয়মিত ল্যাব প্র্যাকটিসের ফলে এখন দ্রুত টাইপ করতে পারি।'
        },
        {
          name: 'Saiful Islam',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটোশপে ছবি এডিটিং ও সোশ্যাল মিডিয়া ব্যানার ডিজাইনের অনেক কৌশল এখান থেকে শিখেছি। প্রশিক্ষকরা সবসময় উৎসাহ দেন।'
        },
        {
          name: 'Nabila Sultana',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'মেয়েদের জন্য নিরাপদ ও স্বাচ্ছন্দ্যময় শেখার পরিবেশ রয়েছে। কোনো বিষয় না বুঝলে শিক্ষকরা বারবার বুঝিয়ে দেন।'
        },
        {
          name: 'Imran Ahmed',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সাশ্রয়ী কোর্স ফিতে এত ভালো মানের ব্যবহারিক প্রশিক্ষণ সত্যিই প্রশংসনীয়। আমি আমার বন্ধুদেরও এখানে ভর্তির পরামর্শ দিয়েছি।'
        },
        {
          name: 'Sharmin Akter',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'প্রিন্ট মিডিয়া ও ব্র্যান্ডিং ডিজাইনের ওপর হাতে-কলমে প্রজেক্ট করার সুযোগ পেয়েছি, যা আমার পোর্টফোলিও সমৃদ্ধ করেছে।'
        },
        {
          name: 'Fahim Rahman',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'থিওরির চেয়ে ব্যবহারিক ক্লাসে বেশি গুরুত্ব দেওয়া হয় বলে শেখাটা অনেক সহজ ও আনন্দদায়ক হয়েছে।'
        },
        {
          name: 'Tanjina Begum',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'পাওয়ার পয়েন্ট প্রেজেন্টেশন তৈরির ক্লাসগুলো আমার বিশ্ববিদ্যালয়ের অ্যাসাইনমেন্টে অনেক সাহায্য করেছে।'
        },
        {
          name: 'Rifat Chowdhury',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রতিটি ক্লাসে নতুন কিছু শেখার সুযোগ থাকে। ল্যাবের কম্পিউটারগুলো সচল ও দ্রুতগতির হওয়ায় কাজ করতে কোনো অসুবিধা হয় না।'
        },
        {
          name: 'Mst. Jannat Ara',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'শূন্য থেকে গ্রাফিক ডিজাইন শিখে আজ আমি নিজের মতো করে বিভিন্ন ডিজাইন তৈরি করতে পারছি। শিক্ষকদের প্রতি কৃতজ্ঞ।'
        },
        {
          name: 'Shakil Ahmed',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অফিসিয়াল চিঠিপত্র ফরম্যাটিং এবং টেবিল তৈরির কাজগুলো খুব পরিষ্কারভাবে শেখানো হয়েছে।'
        },
        {
          name: 'Lamia Islam',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কোর্স শেষে ফাইনাল মূল্যায়ন পরীক্ষা ও সার্টিফিকেট প্রদানের প্রক্রিয়াটি খুবই স্বচ্ছ ও পেশাদার।'
        },
        {
          name: 'Abdur Rahman',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ছয় মাসের এই কোর্সটি করার পর কম্পিউটার পরিচালনায় আমার জড়তা পুরোপুরি কেটে গেছে।'
        },
        {
          name: 'Ruma Akter',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'শিক্ষকদের বন্ধুত্বপূর্ণ আচরণ এবং নিয়মিত তত্ত্বাবধান আমাকে প্রতিদিন ক্লাসে আসতে অনুপ্রাণিত করেছে।'
        },
        {
          name: 'Anik Das',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ইলাস্ট্রেটরে ভেক্টর আর্ট ও লোগো তৈরির কৌশলগুলো হাতে-কলমে শেখার দারুণ অভিজ্ঞতা হয়েছে এখানে।'
        },
        {
          name: 'Sumi Akter',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বেসিক Photoshop থেকে শুরু করে MS Office-এর সব গুরুত্বপূর্ণ কাজ এই কোর্সে সুন্দরভাবে কভার করা হয়েছে।'
        },
        {
          name: 'Kamrul Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'যারা অল্প সময়ে অফিসের প্রয়োজনীয় কম্পিউটার দক্ষতা অর্জন করতে চান, তাদের জন্য এটি সেরা জায়গা।'
        },
        {
          name: 'Priya Das',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'প্রতিটি অ্যাসাইনমেন্টের ওপর শিক্ষকদের গঠনমূলক মতামত আমার ডিজাইনের মান অনেক উন্নত করেছে।'
        },
        {
          name: 'Joynal Abedin',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'বাস্তব কর্মক্ষেত্রের উপযোগী করে সিলেবাস সাজানো হয়েছে। প্রতিটি মডিউল শেষে প্র্যাকটিস টেস্ট নেওয়া হয়।'
        },
        {
          name: 'Tamanna Rahman',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'বাংলা ও ইংরেজি উভয় ভাষায় নির্ভুল টাইপিং শেখার জন্য এখানকার ল্যাব সেশনগুলো অত্যন্ত কার্যকর।'
        },
        {
          name: 'Asif Mahmud',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এক্সেলের চার্ট, ফিল্টার ও হিসাব-নিকাশের কাজগুলো এত সহজভাবে বুঝিয়ে দেওয়া হয়েছে যে এখন আর কোনো সমস্যা হয় না।'
        },
        {
          name: 'Rashedul Islam',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটোশপ ও ইলাস্ট্রেটরের শর্টকাট ও প্রফেশনাল ওয়ার্কফ্লো শেখার ফলে কাজের গতি অনেক বেড়েছে।'
        },
        {
          name: 'Mahiya Chowdhury',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'খুবই গোছানো পাঠ্যক্রম এবং আন্তরিক প্রশিক্ষক টিম। তিন মাসে অনেক কিছু শিখতে পেরেছি।'
        },
        {
          name: 'Sohel Rana',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'কম্পিউটারের মৌলিক ধারণা থেকে অ্যাডভান্সড অ্যাপ্লিকেশন পর্যন্ত প্রতিটি বিষয়ে পূর্ণাঙ্গ সাপোর্ট পেয়েছি।'
        },
        {
          name: 'Tania Sultana',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের বাইরেও ল্যাবে প্র্যাকটিস করার সুযোগ থাকায় কঠিন বিষয়গুলো সহজে আয়ত্ত করতে পেরেছি।'
        },
        {
          name: 'Shuvo Ahmed',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'সোশ্যাল মিডিয়া পোস্ট, ফ্লায়ার ও ব্রোশিওর ডিজাইনের বাস্তব প্রজেক্টগুলো আমাকে ফ্রিল্যান্সিংয়ের পথে এগিয়ে দিয়েছে।'
        },
        {
          name: 'Ayesha Siddika',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'পরিচ্ছন্ন ল্যাব ও সুশৃঙ্খল পরিবেশের কারণে পড়াশোনায় মনোযোগ ধরে রাখা খুব সহজ হয়।'
        },
        {
          name: 'Al Amin',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'ইন্টারনেট ও ইমেইল ব্যবস্থাপনা এবং অফিস সফটওয়্যারের ব্যবহারিক ক্লাসগুলো আমার চাকরির ভাইভায় দারুণ কাজে দিয়েছে।'
        },
        {
          name: 'Monira Begum',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'নারী শিক্ষার্থীদের জন্য বিশেষ যত্ন ও সহায়ক পরিবেশ থাকায় নির্দ্বিধায় সব প্রশ্ন করতে পেরেছি।'
        },
        {
          name: 'Fahad Hossain',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রতিদিন নির্দিষ্ট টার্গেট দিয়ে টাইপিং ও অফিসের কাজ শেখানো হয়, ফলে অগ্রগতি নিজেই বোঝা যায়।'
        },
        {
          name: 'Rukaiya Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'ছয় মাসের ডিপ্লোমা কোর্সটি আমার ডিজিটাল দক্ষতাকে এক নতুন উচ্চতায় নিয়ে গেছে।'
        },
        {
          name: 'Nayeem Islam',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'প্রশিক্ষকদের বোঝানোর ধরন খুব প্রাঞ্জল। কঠিন টপিকগুলোও সহজ উদাহরণ দিয়ে পরিষ্কার করে দেন।'
        },
        {
          name: 'Sumon Mia',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ডিজাইনের সেন্স ও সফটওয়্যার স্কিল—দুটিই সমান গুরুত্ব দিয়ে শেখানো হয় এখানে।'
        },
        {
          name: 'Raisa Jahan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'এমএস ওয়ার্ডে রিপোর্ট তৈরি ও এক্সেলে ডেটা সাজানোর কাজগুলো এখন খুব আত্মবিশ্বাসের সাথে করতে পারি।'
        },
        {
          name: 'Emon Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'নিয়মিত উপস্থিতি ও প্র্যাকটিক্যাল পরীক্ষার মাধ্যমে শিক্ষার্থীদের প্রকৃত দক্ষতা যাচাই করা হয়।'
        },
        {
          name: 'Nusrat Tabassum',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ফটো রিটাচিং ও ব্যাকগ্রাউন্ড রিমুভালের কাজগুলো খুব নিখুঁতভাবে শেখানো হয়েছে।'
        },
        {
          name: 'Sabbir Hossain',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অল্প খরচে মানসম্মত কম্পিউটার প্রশিক্ষণ নেওয়ার জন্য এটি একটি আদর্শ প্রতিষ্ঠান।'
        },
        {
          name: 'Sohana Akter',
          role: '৬ মাসের Higher Diploma in Computer Course',
          isDemo: true,
          quote:
            'পুরো কোর্স জুড়ে শিক্ষকদের আন্তরিক দিকনির্দেশনা পেয়েছি। ব্যবহারিক ল্যাব সুবিধা সত্যিই চমৎকার।'
        },
        {
          name: 'Faisal Ahmed',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'অফিস অটোমেশন ও বেসিক ফটোশপ একসাথে শেখার সুযোগ থাকায় কোর্সটি খুবই উপকারী মনে হয়েছে।'
        },
        {
          name: 'Afrin Sultana',
          role: '৬ মাসের গ্রাফিক ডিজাইন কোর্স',
          isDemo: true,
          quote:
            'ক্লাসের প্রতিটি প্রজেক্ট শেষ করার পর শিক্ষকদের ফিডব্যাক আমাকে আরও ভালো ডিজাইন করতে অনুপ্রাণিত করেছে।'
        },
        {
          name: 'Tahmid Hasan',
          role: '৩ মাসের বেসিক কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'কম্পিউটারের বেসিক অপারেশন ও অফিস সফটওয়্যারে শক্ত ভিত্তি গড়তে এই কোর্সটি দারুণ সহায়ক।'
        },
        {
          name: 'Shakib Rahman',
          role: '৬ মাসের ডিপ্লোমা ইন কম্পিউটার কোর্স',
          isDemo: true,
          quote:
            'সুশৃঙ্খল ক্লাস রুটিন, অভিজ্ঞ প্রশিক্ষক এবং পর্যাপ্ত প্র্যাকটিস সুবিধার জন্য পুরো টিমকে ধন্যবাদ।'
        }
      ]
    },
    contact: {
      tag: 'যোগাযোগ করুন',
      title: 'যোগাযোগ ও ঠিকানা',
      subtitle:
        'সরকারের অধীনে পরিচালিত সিলেট হেড পোস্ট অফিস, বন্দরবাজারে আমাদের সেন্টারে সরাসরি আসুন অথবা ফোন বা হোয়াটসঅ্যাপে যোগাযোগ করুন।',
      visitTitle: 'আমাদের সেন্টার ভিজিট করুন',
      directorLabel: 'উদ্যোক্তা ও পরিচালক',
      directorName: 'বলরাম বণিক',
      directorQualification: 'এম.এস.এস (রাষ্ট্রবিজ্ঞান), এম.সি কলেজ, সিলেট',
      directorRole: 'পরিচালক, জকিগঞ্জ উপজেলা পোস্ট ই-সেন্টার, জকিগঞ্জ, সিলেট',
      addressLabel: 'ঠিকানা',
      addressValue: 'সিলেট হেড পোস্ট অফিস, বন্দরবাজার, সিলেট ৩১০০',
      phoneLabel: 'ফোন / হোয়াটসঅ্যাপ',
      emailLabel: 'ইমেইল',
      hoursLabel: 'অফিস সময়সূচি',
      hoursValue: 'রবিবার – বৃহস্পতি: সকাল ৯:০০ – বিকাল ৬:০০',
      hoursClosed: 'শুক্রবার: বন্ধ',
      instituteInfoLabel: 'সরকারি অনুমোদন ও সনদপত্র তথ্য',
      instituteAffiliation: 'সরকারের অধীনে পরিচালিত ডিজিটাল ই-সেন্টার (বাংলাদেশ ডাক বিভাগ)',
      batchLimitInfo: 'প্রতি ব্যাচে ১৪ জন শিক্ষার্থী নেওয়া হয়',
      examPolicyInfo: 'প্রতিটি কোর্স শেষে পরীক্ষা এবং সরাসরি সরকার কর্তৃক সার্টিফিকেট প্রদান করা হয়',
      callNowBtn: 'কল করুন',
      whatsappBtn: 'হোয়াটসঅ্যাপ',
      visitCenterBtn: 'সেন্টারের লোকেশন দেখুন',
      mapTitle: 'ক্যাম্পাস লোকেশন ম্যাপ (সিলেট হেড পোস্ট অফিস)',
      formTitle: 'কোর্স ভর্তি তথ্য অনুসন্ধান',
      formNotice:
        'নিচ থেকে আমাদের ৩টি কোর্সের যেকোনো একটি নির্বাচন করুন এবং সরাসরি সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টারের হোয়াটসঅ্যাপে আপনার বার্তা পাঠান।',
      nameLabel: 'পূর্ণ নাম',
      namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
      interestLabel: 'কোর্স নির্বাচন করুন',
      messageLabel: 'বার্তা / পছন্দের ব্যাচ সময়',
      messagePlaceholder: 'আপনার পছন্দের ব্যাচ সময় বা কোর্স সম্পর্কে প্রশ্ন লিখুন...',
      sendBtn: 'হোয়াটসঅ্যাপে বার্তা পাঠান'
    },
    footer: {
      tagline:
        'সরকারের অধীনে পরিচালিত সিলেট হেড পোস্ট অফিস, বন্দরবাজারে অবস্থিত একটি বিশ্বস্ত কম্পিউটার প্রশিক্ষণ কেন্দ্র—কোর্স শেষে সরাসরি সরকার কর্তৃক প্রদত্ত সনদপত্র প্রদান করা হয়।',
      quickLinks: 'দ্রুত লিংক',
      connect: 'যোগাযোগের তথ্য',
      copyright: '© ২০২৬ সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টার। সর্বস্বত্ব সংরক্ষিত।',
      designedFor: 'সরকারি ব্যবস্থাপনায় পরিচালিত • সিলেট হেড পোস্ট অফিস, বন্দরবাজার, সিলেট ৩১০০।'
    }
  }
};

// Scaled-Down Post Office Emblem Background Watermark Pattern
const PostOfficeWatermark = ({ dark = false, opacity = 'opacity-[0.04]' }) => {
  const strokeColor = dark ? '#facc15' : '#b91c1c';
  const fillAccent = dark ? '#fde047' : '#991b1b';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${opacity}`}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={dark ? 'postOfficePatternDark' : 'postOfficePatternLight'}
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(70, 70) scale(0.85)">
              <circle
                cx="58"
                cy="58"
                r="46"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2.2"
                strokeDasharray="6 4"
              />
              <circle
                cx="58"
                cy="58"
                r="38"
                fill="none"
                stroke={strokeColor}
                strokeWidth="1.4"
              />
              <rect
                x="33"
                y="41"
                width="50"
                height="34"
                rx="4"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2.4"
              />
              <path
                d="M34 43L58 61L82 43"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 52H28M17 58H28M21 64H28"
                stroke={fillAccent}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <polygon
                points="58,25 60,30 65,30 61,33 62,38 58,35 54,38 55,33 51,30 56,30"
                fill={fillAccent}
              />
            </g>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${dark ? 'postOfficePatternDark' : 'postOfficePatternLight'})`}
        />
      </svg>
    </div>
  );
};

// Official Sylhet Head Post Office Digital e-Center Logo Component
const TouchProLogo = ({ size = 'md' }) => {
  const dims = size === 'sm' ? 'w-28 h-10' : 'w-36 h-12 md:w-40 md:h-14';
  return (
    <div
      className={`${dims} relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
    >
      <img
        src="https://iili.io/J2V2vKQ.png"
        alt="Sylhet Head Post Office Digital e-Center Logo"
        className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(185,28,28,0.25)]"
      />
    </div>
  );
};

// Reusable Scroll Reveal Component
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('bn');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFeeCourse, setSelectedFeeCourse] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [inquiryCourse, setInquiryCourse] = useState(COURSES_DATA[0].title.bn);
  const [inquiryMessage, setInquiryMessage] = useState('');

  const t = UI_COPY[lang];
  const testimonialsList = t.testimonials.items;
  const totalReviews = testimonialsList.length;

  useEffect(() => {
    setInquiryCourse(COURSES_DATA[0].title[lang]);
  }, [lang]);

  // Duplicate the 55-review track twice for a seamless, continuous infinite loop with zero re-renders
  const infiniteReviewsTrack = [...testimonialsList, ...testimonialsList];

  const filteredCourses =
    activeFilter === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === activeFilter);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppUrl = (customText) => {
    const defaultMsg =
      lang === 'bn'
        ? 'আসসালামু আলাইকুম, আমি সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টারের কোর্স সম্পর্কে জানতে চাই।'
        : 'Assalamu Alaikum, I would like to inquire about courses at Sylhet Head Post Office Digital e-Center.';
    const text = encodeURIComponent(customText || defaultMsg);
    return `https://wa.me/${CENTER_CONTACT.whatsappNumber}?text=${text}`;
  };

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const namePart = studentName.trim()
      ? lang === 'bn'
        ? `নাম: ${studentName.trim()}\n`
        : `Name: ${studentName.trim()}\n`
      : '';
    const coursePart =
      lang === 'bn'
        ? `আগ্রহী কোর্স: ${inquiryCourse}\n`
        : `Interested Course: ${inquiryCourse}\n`;
    const msgPart = inquiryMessage.trim()
      ? lang === 'bn'
        ? `বার্তা: ${inquiryMessage.trim()}`
        : `Message: ${inquiryMessage.trim()}`
      : '';

    const fullMsg =
      (lang === 'bn'
        ? 'আসসালামু আলাইকুম সিলেট হেড পোস্ট অফিস ডিজিটাল ই-সেন্টার,\n'
        : 'Assalamu Alaikum Sylhet Head Post Office Digital e-Center,\n') +
      namePart +
      coursePart +
      msgPart;

    window.open(getWhatsAppUrl(fullMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-800 font-sans antialiased selection:bg-red-700 selection:text-white">
      {/* Custom Bangladesh Post Office Crimson Red & Golden Yellow Theme Styles + Animations */}
      <style>{`
        .postal-hero-bg {
          background-color: #2b0709;
          background-image:
            linear-gradient(135deg, rgba(127, 17, 22, 0.93) 0%, rgba(58, 9, 13, 0.94) 55%, rgba(28, 5, 7, 0.96) 100%),
            url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
        }

        .postal-crimson-bg {
          background-color: #3d090c;
          background-image:
            linear-gradient(180deg, rgba(69, 10, 14, 0.94) 0%, rgba(127, 17, 22, 0.91) 55%, rgba(43, 7, 9, 0.96) 100%),
            url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
        }

        .postal-parchment-bg {
          background-color: #faf7f4;
          background-image:
            radial-gradient(circle at 12% 15%, rgba(185, 28, 28, 0.06) 0%, transparent 42%),
            radial-gradient(circle at 88% 85%, rgba(234, 179, 8, 0.08) 0%, transparent 42%);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(10px, -14px, 0) scale(1.04); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-12px, 14px, 0) scale(0.96); }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        @keyframes continuousReviewMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-review-marquee {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: continuousReviewMarquee 165s linear infinite;
        }
        .review-marquee-card {
          width: calc(100vw - 2.5rem);
          max-width: 420px;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .review-marquee-card {
            width: calc((100vw - 4rem) / 2);
            max-width: 410px;
          }
        }
        @media (min-width: 1024px) {
          .review-marquee-card {
            width: 390px;
            max-width: 390px;
          }
        }

        .animate-float-slow {
          animation: floatSlow 9s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 11s ease-in-out infinite;
        }
        .animate-modal-pop {
          animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-card-appear {
          animation: cardAppear 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .card-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 45%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-120%) skewX(-20deg);
          pointer-events: none;
        }
        .card-shimmer:hover::after {
          animation: shimmerSweep 0.85s ease-out;
        }
      `}</style>

      {/* ==================== TOP DIGITAL CENTER LOCATION & CONTACT RIBBON ==================== */}
      <div className="bg-[#2b0709] text-amber-100/90 text-xs py-2.5 px-4 border-b border-red-900/70">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span>{t.topNotice}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CENTER_CONTACT.directCallTel}
              className="inline-flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CENTER_CONTACT.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-red-800">|</span>
            <span className="hidden sm:inline text-amber-200/70">{t.contact.hoursValue}</span>
          </div>
        </div>
      </div>

      {/* ==================== STICKY EXECUTIVE EDITORIAL HEADER ==================== */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-red-100 transition-all shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Title */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-1.5 h-9 rounded-full bg-red-700 group-hover:bg-amber-500 transition-colors" />
              <div>
                <span className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight block leading-tight">
                  Sylhet Head Post Office
                </span>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-red-700">
                  Digital e-Center
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
              >
                {t.nav.courses}
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
              >
                {t.nav.facilities}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
              >
                {t.nav.gallery}
              </button>
              {SHOW_TESTIMONIALS && (
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
                >
                  {t.nav.testimonials}
                </button>
              )}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-slate-600 hover:text-red-700 transition-colors"
              >
                {t.nav.contact}
              </button>
            </nav>

            {/* Language Switcher, Contact CTA & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={toggleLanguage}
                aria-label="Switch Language"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-amber-50 hover:bg-amber-100 text-red-900 border border-amber-200 transition-colors"
              >
                <Globe className="w-4 h-4 text-red-700" />
                <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors shadow-xs"
              >
                {t.contactUsBtn}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-red-50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-red-100 px-4 pt-2 pb-6 space-y-1 shadow-xl">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              {t.nav.courses}
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              {t.nav.facilities}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              {t.nav.gallery}
            </button>
            {SHOW_TESTIMONIALS && (
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
              >
                {t.nav.testimonials}
              </button>
            )}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              {t.nav.contact}
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg"
              >
                {t.contactUsBtn}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ==================== 1. ARCHITECTURAL BENTO HERO SECTION (POST OFFICE CRIMSON & GOLD) ==================== */}
      <section
        id="home"
        className="relative postal-hero-bg text-white border-b border-red-900/60 overflow-hidden"
      >
        <PostOfficeWatermark dark opacity="opacity-[0.08]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Main Architectural Block */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-[#2b0709]/80 backdrop-blur-md border border-amber-400/25 rounded-2xl p-7 sm:p-10 lg:p-12 shadow-2xl">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.hero.badge}</span>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
                    {t.hero.titleStart}{' '}
                    <span className="text-amber-400 underline decoration-red-500/80 decoration-4 underline-offset-8">
                      {t.hero.titleBrand}
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={200}>
                  <p className="text-base sm:text-lg text-amber-50/85 leading-relaxed mb-8">
                    {t.hero.subtitle}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={300}>
                <div className="pt-6 border-t border-red-800/70 flex flex-col sm:flex-row items-center gap-3.5">
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="w-full sm:w-auto px-7 py-3.5 text-sm font-extrabold text-[#2b0709] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>{t.hero.ctaPrimary}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-red-900/70 hover:bg-red-800 border border-amber-400/35 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{t.hero.ctaSecondary}</span>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Bento Column: Campus Visual + 2x2 Key Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <Reveal delay={180} className="flex-1">
                <div className="h-full bg-[#2b0709]/90 rounded-2xl overflow-hidden border border-amber-400/25 flex flex-col justify-between shadow-2xl">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
                      alt="Sylhet Head Post Office Digital e-Center Lab"
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b0709] via-[#2b0709]/35 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold uppercase tracking-widest mb-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Bondor Bazar, Sylhet</span>
                      </div>
                      <div className="text-base font-bold leading-snug">
                        {t.hero.campusCaption}
                      </div>
                      <p className="text-xs text-amber-100/80 mt-0.5">{t.hero.campusSub}</p>
                    </div>
                  </div>

                  {/* 2x2 Clean Architectural Metrics Grid */}
                  <div className="grid grid-cols-2 divide-x divide-y divide-red-900/80 border-t border-red-900/80 bg-[#220507]">
                    {t.hero.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 sm:p-5">
                        <div className="text-xl sm:text-2xl font-extrabold text-amber-400">
                          {stat.value}
                        </div>
                        <div className="text-xs font-medium text-amber-100/75 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. STRUCTURED CATALOGUE: OUR 3 COURSES ==================== */}
      <section id="courses" className="py-20 md:py-24 postal-parchment-bg border-b border-amber-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Header + Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-10 border-b border-red-200/70">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                  {t.coursesSection.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-3">
                  {t.coursesSection.title}
                </h2>
                <p className="text-slate-600 text-base">
                  {t.coursesSection.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="inline-flex p-1 rounded-lg bg-red-100/70 border border-red-200/80 self-start">
                {['all', 'Computer', 'Graphic Design'].map((filterKey) => {
                  const isActive = activeFilter === filterKey;
                  return (
                    <button
                      key={filterKey}
                      onClick={() => setActiveFilter(filterKey)}
                      className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'text-red-900 hover:text-red-700'
                      }`}
                    >
                      {t.coursesSection.filters[filterKey]}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Horizontal Structured Course Rows */}
          <div className="space-y-6">
            {filteredCourses.map((course, idx) => (
              <div
                key={course.id}
                style={{ animationDelay: `${idx * 80}ms` }}
                className="bg-white rounded-2xl border border-red-100 hover:border-red-600/50 transition-all duration-300 overflow-hidden shadow-2xs hover:shadow-md animate-card-appear"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Thumbnail Column */}
                  <div className="lg:col-span-4 relative min-h-[220px] bg-[#2b0709] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title[lang]}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b0709]/85 via-transparent to-[#2b0709]/30" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-[#2b0709]">
                        {lang === 'bn' ? course.categoryBn : course.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-700 text-white">
                        {course.duration[lang]}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] uppercase tracking-wider text-amber-200 block">
                        {t.coursesSection.levelLabel} {course.level[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Details & Syllabus Grid */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-red-50">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-2">
                        {course.title[lang]}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {course.description[lang]}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-red-700/80 mb-3">
                        {t.coursesSection.syllabusLabel}
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.highlights[lang].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                          >
                            <Check className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Action & Fee Info Panel */}
                  <div className="lg:col-span-3 p-6 sm:p-8 bg-amber-50/40 flex flex-col justify-between gap-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-800/70 block mb-1">
                        {t.coursesSection.feeDetailsBtn}
                      </span>
                      <div className="text-sm font-bold text-slate-900">
                        {course.feeDetails.courseFee[lang]}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => setSelectedFeeCourse(course)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-red-900 bg-white hover:bg-amber-50 border border-amber-300 rounded-lg transition-colors"
                      >
                        <Info className="w-4 h-4 text-red-700" />
                        <span>{t.coursesSection.feeDetailsBtn}</span>
                      </button>
                      <a
                        href={CENTER_CONTACT.directCallTel}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{t.coursesSection.callNowBtn}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. NUMBERED EDITORIAL PILLARS: WHY CHOOSE US ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                {t.whyChoose.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-3">
                {t.whyChoose.title}
              </h2>
              <p className="text-slate-600 text-base">{t.whyChoose.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-red-100">
            {t.whyChoose.items.map((item, idx) => {
              const icons = [Monitor, Award, Briefcase, Clock];
              const IconComponent = icons[idx % icons.length];
              return (
                <Reveal key={idx} delay={idx * 90}>
                  <div className="h-full p-7 border-r border-b border-red-100 bg-white hover:bg-amber-50/40 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold text-red-700/60">
                          0{idx + 1}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 border border-red-100 flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 4. SPLIT INFRASTRUCTURE SECTION: OUR FACILITIES (POST OFFICE CRIMSON) ==================== */}
      <section
        id="facilities"
        className="relative py-20 md:py-24 postal-crimson-bg text-white border-b border-red-900/70 overflow-hidden"
      >
        <PostOfficeWatermark dark opacity="opacity-[0.07]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {t.facilities.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                {t.facilities.title}
              </h2>
              <p className="text-amber-100/80 text-base leading-relaxed mb-6">
                {t.facilities.subtitle}
              </p>
              <div className="p-5 rounded-xl bg-[#2b0709]/85 border border-amber-400/25 text-xs text-amber-100/90 space-y-2">
                <div className="font-bold text-amber-400 uppercase tracking-wider">
                  {t.contact.instituteInfoLabel}
                </div>
                <p>{t.contact.instituteAffiliation}</p>
                <p>• {t.contact.batchLimitInfo}</p>
                <p>• {t.contact.examPolicyInfo}</p>
              </div>
            </Reveal>

            <div className="lg:col-span-7 divide-y divide-red-800/70 border-y border-red-800/70">
              {t.facilities.items.map((fac, idx) => {
                const icons = [Building2, Sparkles, ShieldCheck];
                const FacIcon = icons[idx % icons.length];
                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="py-7 flex items-start gap-5">
                      <div className="w-11 h-11 rounded-lg bg-[#2b0709]/90 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <FacIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1.5">
                          {fac.title}
                        </h3>
                        <p className="text-sm text-amber-100/75 leading-relaxed">{fac.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. EXECUTIVE LEADERSHIP & FACULTY ROSTER ==================== */}
      <section className="py-20 md:py-24 postal-parchment-bg border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                {t.instructors.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-3">
                {t.instructors.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {t.instructors.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Horizontal Executive Profile Banner for Entrepreneur & Director */}
          <Reveal delay={80} className="mb-8">
            <div className="bg-white rounded-2xl border border-red-100 overflow-hidden shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-4 lg:col-span-3 aspect-[4/4] md:aspect-auto md:h-full bg-[#2b0709] overflow-hidden">
                  <img
                    src={t.instructors.seniorTrainer.image}
                    alt={t.instructors.seniorTrainer.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="md:col-span-8 lg:col-span-9 p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-700 text-white">
                      {t.instructors.seniorTrainer.role}
                    </span>
                    {t.instructors.seniorTrainer.phone && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-red-950">
                        <Phone className="w-3.5 h-3.5 text-red-700" />
                        <span>Mobile: {t.instructors.seniorTrainer.phone}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    {t.instructors.seniorTrainer.name}
                  </h3>
                  <p className="text-sm font-bold text-red-700 mt-1">
                    {t.instructors.seniorTrainer.focus}
                  </p>
                  {t.instructors.seniorTrainer.subRole && (
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {t.instructors.seniorTrainer.subRole}
                    </p>
                  )}
                  <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-red-50">
                    {t.instructors.seniorTrainer.desc}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Clean 3-Column Faculty Roster */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.instructors.teamMembers.map((member, idx) => (
              <Reveal key={idx} delay={150 + idx * 90}>
                <div className="h-full bg-white rounded-2xl border border-red-100 overflow-hidden flex flex-col justify-between shadow-2xs hover:border-red-600/50 transition-colors">
                  <div>
                    <div className="aspect-[4/4] w-full bg-[#2b0709] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-red-900 border border-amber-200 mb-2.5">
                        {member.role}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-950 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mb-3">
                        {member.focus}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {member.desc}
                      </p>
                    </div>
                  </div>

                  {member.phone && (
                    <div className="px-6 py-3.5 bg-amber-50/40 border-t border-red-50">
                      <a
                        href={`tel:${member.phone.replace(/[^+\d]/g, '')}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-900"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. ARCHITECTURAL GALLERY ==================== */}
      <section
        id="gallery"
        className="py-20 md:py-24 bg-white border-b border-red-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-700">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{t.gallery.tag}</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2">
                  {t.gallery.title}
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base max-w-md">
                {t.gallery.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.gallery.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group bg-amber-50/30 rounded-2xl overflow-hidden border border-red-100">
                  <div className="h-60 overflow-hidden bg-[#2b0709]">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 border-t border-red-100">
                    <p className="text-sm font-bold text-slate-900">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. STUDENT TESTIMONIALS (CONTINUOUS AUTOMATIC INFINITE CAROUSEL) ==================== */}
      {SHOW_TESTIMONIALS && t.testimonials.items.length > 0 && (
        <section
          id="testimonials"
          className="relative py-20 md:py-24 postal-crimson-bg text-white border-b border-red-900/70 overflow-hidden"
        >
          <PostOfficeWatermark dark opacity="opacity-[0.06]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {t.testimonials.tag} ({totalReviews})
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">
                  {t.testimonials.title}
                </h2>
                <p className="text-amber-100/80 text-base">{t.testimonials.subtitle}</p>
              </div>
            </Reveal>

            <div
              className="overflow-hidden -mx-2.5 sm:-mx-3.5"
              role="region"
              aria-roledescription="carousel"
              aria-label={t.testimonials.title}
            >
              <div className="animate-review-marquee">
                {infiniteReviewsTrack.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="review-marquee-card px-2.5 sm:px-3.5"
                  >
                    <div className="h-[330px] sm:h-[340px] bg-[#2b0709]/90 border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
                          <div className="flex items-center gap-2">
                            {item.isDemo && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-red-950 text-amber-200 border border-red-800">
                                {lang === 'bn' ? '' : ''}
                              </span>
                            )}
                            <span className="text-xs font-bold text-amber-400 tracking-wider">
                              ★★★★★
                            </span>
                          </div>
                        </div>
                        <p className="text-amber-50/90 text-sm sm:text-[15px] leading-relaxed line-clamp-6">
                          "{item.quote}"
                        </p>
                      </div>
                      <div className="pt-4 border-t border-red-900/70">
                        <div className="font-bold text-white text-sm truncate">{item.name}</div>
                        <div className="text-xs text-amber-400 truncate mt-0.5">{item.role}</div>
                        {item.phone && (
                          <a
                            href={`tel:${item.phone.replace(/[^+\d]/g, '')}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-100 hover:text-amber-300 transition-colors mt-1"
                          >
                            <Phone className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{item.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== 8. CONTACT & LOCATION SECTION ==================== */}
      <section
        id="contact"
        className="py-20 md:py-24 postal-parchment-bg border-b border-red-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-red-700">
                {t.contact.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-3">
                {t.contact.title}
              </h2>
              <p className="text-slate-600 text-base">{t.contact.subtitle}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Institutional Directory Card */}
            <Reveal className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-red-100 shadow-2xs">
                <h3 className="text-xl font-extrabold text-slate-950 pb-5 mb-6 border-b border-red-50">
                  {t.contact.visitTitle}
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.addressLabel}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mt-0.5">
                        {t.contact.addressValue}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.directorLabel}
                      </div>
                      <div className="text-sm font-extrabold text-slate-950 mt-0.5">
                        {t.contact.directorName}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {t.contact.directorQualification}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {t.contact.directorRole}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.phoneLabel}
                      </div>
                      <div className="text-sm font-bold text-red-700 mt-0.5">
                        +880 1301-968454
                      </div>
                      <div className="text-xs font-medium text-slate-600 mt-0.5">
                        {CENTER_CONTACT.phoneDisplaySecondary}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.emailLabel}
                      </div>
                      <div className="text-sm font-medium text-slate-800 mt-0.5">
                        {CENTER_CONTACT.email}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.hoursLabel}
                      </div>
                      <div className="text-sm font-medium text-slate-800 mt-0.5">
                        {t.contact.hoursValue}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {t.contact.hoursClosed}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-red-700 border border-amber-200 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t.contact.instituteInfoLabel}
                      </div>
                      <div className="text-sm font-bold text-red-800 mt-0.5">
                        {t.contact.instituteAffiliation}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        • {t.contact.batchLimitInfo}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        • {t.contact.examPolicyInfo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-7 pt-6 border-t border-red-50 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={CENTER_CONTACT.directCallTel}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold bg-red-700 hover:bg-red-800 text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.contact.callNowBtn}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-[#2b0709] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.contact.whatsappBtn}</span>
                  </a>
                  <a
                    href={CENTER_CONTACT.mapQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-red-900 border border-amber-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-red-700" />
                    <span>{t.contact.visitCenterBtn}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Verified Map & Course Admission Inquiry */}
            <Reveal delay={150} className="lg:col-span-7 space-y-6">
              {SHOW_MAP && (
                <div className="bg-white rounded-2xl overflow-hidden border border-red-100 shadow-2xs">
                  <div className="px-6 py-4 border-b border-red-50 flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-700" />
                      <span>{t.contact.mapTitle}</span>
                    </h3>
                    <a
                      href={CENTER_CONTACT.mapQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-red-700 hover:text-red-800 inline-flex items-center gap-1"
                    >
                      <span>{t.contact.visitCenterBtn}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="w-full h-60 bg-slate-100">
                    <iframe
                      title="Sylhet Head Post Office Digital e-Center Location - Sylhet Head Post Office, Bondor Bazar"
                      src={CENTER_CONTACT.mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}

              {/* Course Admission Inquiry Form */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-red-100 shadow-2xs">
                <h3 className="text-xl font-extrabold text-slate-950 mb-2">
                  {t.contact.formTitle}
                </h3>

                <div className="mb-6 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-red-950 text-xs sm:text-sm leading-relaxed">
                  {t.contact.formNotice}
                </div>

                <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        {t.contact.interestLabel}
                      </label>
                      <select
                        value={inquiryCourse}
                        onChange={(e) => setInquiryCourse(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-all text-sm bg-white"
                      >
                        {COURSES_DATA.map((c) => (
                          <option key={c.id} value={c.title[lang]}>
                            {c.title[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows="3"
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-700 focus:border-red-700 outline-none transition-all text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 9. FOOTER (POST OFFICE HERITAGE MAROON) ==================== */}
      <footer className="bg-[#220507] text-amber-100/80 border-t border-red-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-red-900/60">
            {/* Brand */}
            <div className="md:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="inline-flex items-center gap-3 mb-4 group"
              >
                <div className="w-1.5 h-8 rounded-full bg-amber-400" />
                <div>
                  <span className="text-base sm:text-lg font-extrabold text-white block leading-tight">
                    Sylhet Head Post Office
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
                    Digital e-Center
                  </span>
                </div>
              </a>
              <p className="text-sm text-amber-100/70 max-w-md leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2.5 text-sm text-amber-100/75">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {t.nav.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {t.nav.courses}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('facilities')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {t.nav.facilities}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {t.nav.gallery}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {t.nav.contact}
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Contact Links */}
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
                {t.footer.connect}
              </h4>
              <div className="space-y-2 text-sm text-amber-100/75">
                <p className="font-semibold text-white">{t.contact.directorName} ({t.contact.directorLabel})</p>
                <p>Mobile: +880 1768-974739</p>
                <p>Senior Trainer: +880 1301-968454</p>
                <p>{CENTER_CONTACT.email}</p>
                <p>{t.contact.addressValue}</p>
              </div>
              <div className="flex items-center gap-2.5 mt-4">
                <a
                  href={CENTER_CONTACT.directCallTel}
                  aria-label="Call Sylhet Head Post Office Digital e-Center"
                  className="w-9 h-9 rounded-lg bg-[#2b0709] border border-red-800 hover:border-amber-400 text-amber-200 hover:text-amber-400 flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Sylhet Head Post Office Digital e-Center"
                  className="w-9 h-9 rounded-lg bg-[#2b0709] border border-red-800 hover:border-amber-400 text-amber-200 hover:text-amber-400 flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={CENTER_CONTACT.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Location Map"
                  className="w-9 h-9 rounded-lg bg-[#2b0709] border border-red-800 hover:border-amber-400 text-amber-200 hover:text-amber-400 flex items-center justify-center transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center sm:flex sm:items-center sm:justify-between text-xs text-amber-200/50">
            <p>{t.footer.copyright}</p>
            <p className="mt-2 sm:mt-0">{t.footer.designedFor}</p>
          </div>
        </div>
      </footer>

      {/* ==================== COURSE FEE DETAILS POPUP ==================== */}
      {selectedFeeCourse && (
        <div
          onClick={() => setSelectedFeeCourse(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#220507]/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-modal-pop border border-red-100 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-700 via-amber-400 to-red-800" />

            <button
              onClick={() => setSelectedFeeCourse(null)}
              aria-label="Close Fee Popup"
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
              <Layers className="w-4 h-4" />
              <span>{t.coursesSection.feeModal.tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
              {selectedFeeCourse.title[lang]}
            </h3>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-5">
              <Clock className="w-3.5 h-3.5 text-red-700" />
              <span>
                {t.coursesSection.feeModal.durationLabel}:{' '}
                {selectedFeeCourse.duration[lang]}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 mb-1">
                  {t.coursesSection.feeModal.stepOneTitle}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-slate-600">
                    {t.coursesSection.feeModal.admissionFeeLabel}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 text-right">
                    {selectedFeeCourse.feeDetails.admissionFee[lang]}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200/90">
                <div className="text-[11px] font-bold uppercase tracking-wider text-red-800 mb-1">
                  {t.coursesSection.feeModal.stepTwoTitle}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-slate-600">
                    {t.coursesSection.feeModal.courseFeeLabel}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-red-800 text-right">
                    {selectedFeeCourse.feeDetails.courseFee[lang]}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t.coursesSection.feeModal.paymentLabel}
                </div>
                <div className="space-y-1.5">
                  {selectedFeeCourse.feeDetails.scheduleSteps[lang].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                    >
                      <span className="text-xs font-medium text-slate-600">
                        {step.tag}
                      </span>
                      <span className="text-xs font-extrabold bg-amber-400/20 text-red-900 px-2.5 py-0.5 rounded-lg border border-amber-400/40">
                        {step.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              {t.coursesSection.feeModal.officeNote}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={CENTER_CONTACT.directCallTel}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-extrabold text-[#2b0709] bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{t.coursesSection.feeModal.callBtn}</span>
              </a>
              <a
                href={getWhatsAppUrl(
                  lang === 'bn'
                    ? `আসসালামু আলাইকুম, আমি "${selectedFeeCourse.title.bn}" কোর্সের বিস্তারিত এবং ভর্তি সম্পর্কে জানতে চাই।`
                    : `Assalamu Alaikum, I would like to inquire about details and admission for "${selectedFeeCourse.title.en}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.coursesSection.feeModal.whatsappBtn}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
