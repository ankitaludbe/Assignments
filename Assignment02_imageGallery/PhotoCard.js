import React, { useState } from 'react';

const PhotoCard = ({ photo, index, removePhoto, updatePhoto }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(photo.description);

    const handleUpdate = () => {
        updatePhoto(index, { ...photo, description: newDescription });
        setIsEditing(false);
    };

    return (
        <div className="photo-card">
            <img src={photo.url} alt="Uploaded" />
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{photo.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => removePhoto(index)}>Remove</button>
                </div>
            )}
        </div>
    );
};

export default PhotoCard;
