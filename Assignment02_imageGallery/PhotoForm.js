import React, { useState } from 'react';

const PhotoForm = ({ addPhoto }) => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                addPhoto({ url: reader.result, description });
                setFile(null);
                setDescription('');
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
        <h1 className='title'>Photo Gallery</h1>,
        <form onSubmit={handleSubmit} style={{color: "red"}}>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Photo</button>
        </form>
        </div>
    );
};

export default PhotoForm;
