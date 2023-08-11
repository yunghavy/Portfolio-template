import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { ExitToApp, Home, Person, TableChart, PhotoLibrary, Equalizer } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import firebase from 'firebase/app';
import 'firebase/storage'; 
import AnalyticsSection from './AnalyticsSection';
import ImageUploadSection from './ImageUploadSection';

function AdminPanel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('gallery');
  const [subFolder, setSubFolder] = useState('Events');
  
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!selectedFile) return;
  
      try {
        // Convert PNG to JPG
        let fileToUpload = selectedFile;
        if (selectedFile.type === 'image/png') {
          const image = new Image();
          image.src = URL.createObjectURL(selectedFile);
          await image.decode();
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, image.width, image.height);
          fileToUpload = await new Promise((resolve) =>
            canvas.toBlob(resolve, 'image/jpeg', 0.9)
          );
        }

        const storageRef = firebase.storage().ref();

        let folderName = 'Print';
      if (fileType === 'gallery') {
        folderName = subFolder;
      } else if (fileType === 'design') {
        switch (subFolder) {
          case 'Print':
            folderName = 'Print';
            break;
          case 'UI&UX':
            folderName = 'UI&UX';
            break;
          case 'Logo':
            folderName = 'Logo';
            break;
          case 'Packaging':
            folderName = 'Packaging';
            break;
          case 'Apparel':
            folderName = 'Apparel';
            break;
          default:
            break;
        }
      }

      const fileRef = storageRef.child(`uploads/${folderName}/${fileToUpload.name}`);
      await fileRef.put(fileToUpload);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  const handleSubFolderChange = (e) => {
    setSubFolder(e.target.value);
  };
    const mockAnalyticsData = [
        { page: 'Home', visits: 120, views: 240 },
        { page: 'About', visits: 80, views: 160 },
        { page: 'Portifolio', visits: 60, views: 120 },
        { page: 'Store', visits: 150, views: 300 },
        { page: 'Contact', visits: 200, views: 400 }
      ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <aside className="w-64 p-4 bg-blue-500">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <Avatar src="../public/logo.png" alt="Profile Picture" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-semibold text-white">Yung Havy</h1>
          </div>
          <div className="flex flex-col space-y-2">
            <Home className="cursor-pointer text-white">Home</Home>
            <Person className="cursor-pointer text-white">Profile</Person>
            <TableChart className="cursor-pointer text-white">Chart</TableChart> 
            <PhotoLibrary className="cursor-pointer text-white">Library</PhotoLibrary>
            <Equalizer className="cursor-pointer text-white">Equalizer</Equalizer>
            <Button color="inherit" startIcon={<ExitToApp />} className="text-white">Logout</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <AppBar position="static" className="bg-blue-500 shadow mb-4">
          <Toolbar>
            <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
          </Toolbar>
        </AppBar>

        {/* Analytics Section */}
        <AnalyticsSection analyticsData={mockAnalyticsData} />

        {/* Image Upload Section */}
        <ImageUploadSection
          fileType={fileType}
          subFolder={subFolder}
          handleFileTypeChange={handleFileTypeChange}
          handleSubFolderChange={handleSubFolderChange}
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
        />
      </main>
    </div>
  );
}
        
       
               
        
export default AdminPanel;
