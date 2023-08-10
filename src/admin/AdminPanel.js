import React, { useState } from 'react';
import { AppBar, Toolbar, Button, TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ExitToApp, Home, Person, TableChart, PhotoLibrary, Equalizer } from '@mui/icons-material';
import firebase from 'firebase/app';
import 'firebase/storage'; 
import './admin-panel-styles.css';

function AdminPanel() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!selectedFile) return;
  
      try {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(`uploads/${selectedFile.name}`);
        await fileRef.put(selectedFile);
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
    const mockAnalyticsData = [
        { page: 'Home', visits: 120, views: 240 },
        { page: 'Profile', visits: 80, views: 160 },
        { page: 'Table', visits: 60, views: 120 },
        { page: 'Photo Library', visits: 150, views: 300 },
        { page: 'Analytics', visits: 200, views: 400 }
      ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar position="static" className="bg-blue-500 shadow">
        <Toolbar className="flex justify-between">
          <div className="flex items-center">
            <Avatar src="profile-picture.jpg" alt="Profile Picture" className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Home className="cursor-pointer" />
            <Person className="cursor-pointer" />
            <TableChart className="cursor-pointer" />
            <PhotoLibrary className="cursor-pointer" />
            <Equalizer className="cursor-pointer" />
            <Button color="inherit" startIcon={<ExitToApp />}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="container mx-auto mt-8 flex">
        <section className="flex-grow p-4">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h1 className="text-xl font-bold mb-4">Website Analytics</h1>
            <Paper elevation={3} className="p-4">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Page</TableCell>
                      <TableCell>Visits</TableCell>
                      <TableCell>Views</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mockAnalyticsData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.page}</TableCell>
                        <TableCell>{row.visits}</TableCell>
                        <TableCell>{row.views}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </section>

        <aside className="w-64 p-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-4">Upload Photos</h3>
            <Paper elevation={3} className="p-4">
              <input type="file" onChange={handleFileChange} className="mb-2" />
              <button onClick={handleUpload} className="g-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
            </Paper>
          </div>
        </aside>
      </div>

      {/* Additional content or scripts */}
    </div>
  );
}

export default AdminPanel;
