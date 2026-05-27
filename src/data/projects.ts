export interface Project {
  id: string;
  title: string;
  category: "brass" | "glass" | "metalwork";
  image: string;
  description: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "classic-brass",
    title: "Classic Brass Balustrade",
    category: "brass",
    image: "/images/20150731_113538.jpg",
    description: "Exquisite hand-finished brass railing system featuring a timeless golden luster, engineered for the grand foyer of a luxury estate.",
    details: ["High-grade Solid Brass", "Polished & Satined Finish", "Bespoke Decorative Posts", "Indoor High-Traffic Durability"]
  },
  {
    id: "precision-balusters",
    title: "Precision Welded Balusters",
    category: "metalwork",
    image: "/images/20150731_141213.jpg",
    description: "Architectural metal safety partitions utilizing high-strength precision-welded alloy structural bars with micro-finished joints.",
    details: ["Custom Alloy Steel", "Anti-Corrosion Priming", "Micro-Welded Structural Joinery", "Sleek Modern Profile"]
  },
  {
    id: "curved-brass",
    title: "Curved Brass Stair Railing",
    category: "brass",
    image: "/images/20150825_181652.jpg",
    description: "Seamlessly bent helical staircase railing, combining hand-polished decorative columns and organic design sweeps.",
    details: ["Solid Architectural Brass", "Custom Helical Bending", "Hand-Polished Mirror Finish", "Seamless Ergonomic Profile"]
  },
  {
    id: "luxury-entrance",
    title: "Luxury Entrance Railings",
    category: "brass",
    image: "/images/CAM00211.jpg",
    description: "Commanding luxury entry railings featuring premium brass accents, engineered to provide structural security with absolute luxury.",
    details: ["Weatherproof PVD Gold Coating", "Solid Core Steel Subframe", "Integrated Polished Finials", "High impact resistance"]
  },
  {
    id: "steel-frame",
    title: "Structural Steel Frame",
    category: "metalwork",
    image: "/images/CAM00212.jpg",
    description: "Heavy-duty exposed steel staircase support frame, bringing industrial-tactile elegance into modern open-floor architectural plans.",
    details: ["Structural Grade Carbon Steel", "Exposed Architectural Bolts", "Load-Bearing Certified", "Anti-Scratch Matte Finish"]
  },
  {
    id: "ornamental-brass",
    title: "Ornamental Brass Handrail",
    category: "brass",
    image: "/images/CAM00214.jpg",
    description: "Ornate wall-mounted handrail in custom solid brass, incorporating custom-molded luxury end brackets and mirror-polished surface finish.",
    details: ["Heavy-Gauge Solid Brass", "Bespoke Cast Wall Brackets", "Mirror Finish Polish", "Handcrafted End Finials"]
  },
  {
    id: "balcony-glass",
    title: "Minimalist Balcony Glass",
    category: "glass",
    image: "/images/CAM00262.jpg",
    description: "Sleek frameless balcony safety barrier featuring ultra-clear tempered glass and heavy-duty concealed floor channel supports.",
    details: ["Low-Iron Laminated Tempered Glass", "Concealed Aluminum Base Shoes", "Top Profile Brass Cap Railing", "Hurricane-force Wind Certified"]
  },
  {
    id: "geometric-grille",
    title: "Custom Geometric Grille",
    category: "metalwork",
    image: "/images/FB_IMG_1486268929293.jpg",
    description: "Decorative facade laser-cut geometric security screen, creating a play of light and shadow while ensuring absolute safety.",
    details: ["Precision Laser-Cut Alloys", "Bespoke Geometric Patterning", "Rust-Resistant Galvanized Outer Shell", "Custom HSL Color Powder-Coating"]
  },
  {
    id: "atrium-railing",
    title: "Commercial Atrium Railing",
    category: "brass",
    image: "/images/IMG_20150117_163852717.jpg",
    description: "Large-scale continuous multi-level atrium safety railing, engineered with gold accents and high-tensile safety posts.",
    details: ["Commercially Rated Load Capacity", "Continuous Helical Joint Splines", "PVD Satin Brass Hard Coat", "Concealed Anchor Systems"]
  },
  {
    id: "heavy-glass-channel",
    title: "Heavy-Duty Glass Channel",
    category: "glass",
    image: "/images/IMG_20150430_110056959.jpg",
    description: "Structural laminated safety glass panels supported by heavy exposed dry-glaze structural aluminum channels.",
    details: ["Dry-Glaze Speed Channel Support", "19mm Heavy Tempered Glass", "Bespoke Matte Black Shoe Plates", "Architectural Minimalist Frame"]
  },
  {
    id: "frameless-glass",
    title: "Frameless Structural Glass",
    category: "glass",
    image: "/images/IMG_20150430_110129265_HDR.jpg",
    description: "Architectural glass divider system utilizing spider brackets and structural steel joints for an unobstructed luxury view.",
    details: ["Spider Fitting Joint Attachments", "Anti-Reflective Laminated Panels", "High Tensile Steel Point Connectors", "Maximum Light Transmittance"]
  },
  {
    id: "security-balustrade",
    title: "Industrial Security Balustrade",
    category: "metalwork",
    image: "/images/IMG_20150824_104010779.jpg",
    description: "Heavy duty security fence partition utilizing carbon steel channels and vertical bars, engineered for modern luxury perimeter defense.",
    details: ["High-Impact Structural Steel", "Galvanized Core Foundation", "Anti-Climb Vertical Bars", "Textured Weatherproof Finish"]
  },
];
