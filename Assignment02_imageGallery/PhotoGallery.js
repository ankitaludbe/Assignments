import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import PhotoForm from './PhotoForm';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const storedPhotos = JSON.parse(localStorage.getItem('photos')) || [];
        setPhotos(storedPhotos);
    }, []);

    const addPhoto = (photo) => {
        const newPhotos = [...photos, photo];
        setPhotos(newPhotos);
        localStorage.setItem('photos', JSON.stringify(newPhotos));
    };

    const removePhoto = (index) => {
        const newPhotos = photos.filter((_, i) => i !== index);
        setPhotos(newPhotos);
        localStorage.setItem('photos', JSON.stringify(newPhotos));
    };

    const updatePhoto = (index, updatedPhoto) => {
        const newPhotos = photos.map((photo, i) => (i === index ? updatedPhoto : photo));
        setPhotos(newPhotos);
        localStorage.setItem('photos', JSON.stringify(newPhotos));
    };

    return (
        <div>
            <PhotoForm addPhoto={addPhoto} />
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <PhotoCard
                        key={index}
                        index={index}
                        photo={photo}
                        removePhoto={removePhoto}
                        updatePhoto={updatePhoto}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
