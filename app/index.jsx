

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { CheckSquare, Square } from 'lucide-react-native';

// export default function DisclaimerScreen() {
//   const [agreed, setAgreed] = useState(false);

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#000' }}>
//       {/* Top Image */}
//       <Image
//         source={require('../assets/images/Github-1920x1080-cat-only.png')}
//         style={{ width: '100%', height: 200, resizeMode: 'cover' }}
//       />

//       {/* White Card */}
//       <View
//         style={{
//           backgroundColor: 'white',
//           borderTopLeftRadius: 32,
//           borderTopRightRadius: 32,
//           padding: 20,
//           marginTop: -30,
//           minHeight: 500,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: -2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 6,
//           elevation: 10,
//         }}
//       >
//         <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#800080', marginBottom: 10 }}>
//           Disclaimer
//         </Text>

//         <Text style={{ fontSize: 16, marginBottom: 12 }}>
//           Before proceeding, confirm that you understand and accept the following rules:
//         </Text>

//         {[
//           'This survey is for feedback purpose and responses will only be used for that purpose.',
//           'Responses are confidential and will only be used in aggregate. No personal data will be shared.',
//           'By completing this survey, you consent to the use of your data for research purposes only.',
//           'By participating, you agree to the terms outlined here. For questions, contact us at [contact information].',
//           'No financial compensation is offered for completing this survey.',
//           'Participants must be [insert minimum age].',
//           'We are not responsible for any technical issues encountered. Contact [contact information] for help.',
//         ].map((item, index) => (
//           <Text key={index} style={{ fontSize: 14, color: '#333', marginBottom: 8 }}>• {item}</Text>
//         ))}

//         {/* Checkbox */}
//         <TouchableOpacity
//           onPress={() => setAgreed(!agreed)}
//           style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
//         >
//           {agreed ? (
//             <CheckSquare size={24} color="#800080" />
//           ) : (
//             <Square size={24} color="#800080" />
//           )}
//           <Text style={{ marginLeft: 10, fontSize: 15 }}>
//             I have read and agree to the assessment terms.
//           </Text>
//         </TouchableOpacity>

//         {/* Button */}
//         <TouchableOpacity
//           disabled={!agreed}
//           style={{
//             backgroundColor: agreed ? '#800080' : '#ccc',
//             paddingVertical: 14,
//             borderRadius: 16,
//             marginTop: 30,
//             alignItems: 'center',
//             shadowColor: '#800080',
//             shadowOffset: { width: 0, height: 3 },
//             shadowOpacity: 0.4,
//             shadowRadius: 6,
//             elevation: 6,
//           }}
//         >
//           <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
//             Start Assessment
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }
