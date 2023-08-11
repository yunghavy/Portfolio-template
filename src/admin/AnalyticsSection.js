import React from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';


const AnalyticsSection = ({ analyticsData }) => {
  return (
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
              {analyticsData.map((row, index) => (
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
  );
};

export default AnalyticsSection;
