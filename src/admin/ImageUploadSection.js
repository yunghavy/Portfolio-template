import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from '@mui/material';

const ImageUploadSection = ({ fileType, subFolder, handleFileTypeChange, handleSubFolderChange, handleFileChange, handleUpload }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-bold mb-4">Upload Photos</h3>
      <Paper elevation={3} className="p-4">
        <FormControl component="fieldset">
          <FormLabel component="legend">File Type</FormLabel>
          <RadioGroup
            aria-label="file-type"
            name="file-type"
            value={fileType}
            onChange={handleFileTypeChange}
          >
            <FormControlLabel value="gallery" control={<Radio />} label="Gallery" />
            <FormControlLabel value="design" control={<Radio />} label="Design" />
          </RadioGroup>
        </FormControl>

        {fileType === 'gallery' ? (
          <FormControl className="mt-3">
            <FormLabel component="legend">Subfolder</FormLabel>
            <RadioGroup
              aria-label="subfolder"
              name="subfolder"
              value={subFolder}
              onChange={handleSubFolderChange}
            >
                <FormControlLabel value="Events" control={<Radio />} label="Events" />
                <FormControlLabel value="Kt" control={<Radio />} label="Kt" />
                <FormControlLabel value="Places" control={<Radio />} label="Places" />
                <FormControlLabel value="Prime" control={<Radio />} label="Prime" />
            </RadioGroup>
          </FormControl>
        ) : (
          <FormControl className="mt-3">
            <FormLabel component="legend">Subfolder</FormLabel>
            <RadioGroup
              aria-label="subfolder"
              name="subfolder"
              value={subFolder}
              onChange={handleSubFolderChange}
            >
                <FormControlLabel value="Print" control={<Radio />} label="Print" />
                <FormControlLabel value="UI&UX" control={<Radio />} label="UI&UX" />
                <FormControlLabel value="Logo" control={<Radio />} label="Logo" />
                <FormControlLabel value="Packaging" control={<Radio />} label="Packaging" />
                <FormControlLabel value="Apparel" control={<Radio />} label="Apparel" />
            </RadioGroup>
          </FormControl>
        )}

        <input type="file" onChange={handleFileChange} className="mb-2 mt-3" />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </Paper>
    </div>
  );
};

export default ImageUploadSection;
