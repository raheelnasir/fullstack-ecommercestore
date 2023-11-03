import React, { useContext, useState, useEffect } from 'react';
import './ProductDetailCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaperPlane, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StoreApi } from '../ContextApi';
import Api from '../Auth';

const ProductDetailCard = () => {
    const { loggedInUser, detailCard, handleRefresh } = useContext(StoreApi);

    const userHasLiked = detailCard.likes.some((like) => like.user === loggedInUser.id && like.product === detailCard.id);

    const [totalLikes, setTotalLikes] = useState(detailCard.likes.length);
    useEffect(() => {
        // Initialize likeIconClass based on userHasLiked
        const likeIconClass = userHasLiked ? 'liked' : 'like-icon';
        setLikeIconClass(likeIconClass);

        setTotalLikes(detailCard.likes.length); // Update totalLikes when detailCard.likes change
    }, [detailCard, userHasLiked]);

    const [likeIconClass, setLikeIconClass] = useState('like-icon');
    const [reviews, setReviews] = useState([]); // Initialize reviews as an empty array

    // Use an effect to update reviews when detailCard.reviews changes
    useEffect(() => {
        setReviews(detailCard.reviews);
    }, [detailCard.reviews]);

    const [editingCommentId, setEditingCommentId] = useState(null); // Track the comment being edited
    const [editedComment, setEditedComment] = useState(""); // Track the edited comment text

    const startEditingComment = (commentId) => {
        const commentToEdit = reviews.find((e) => e.id === commentId);
        if (commentToEdit) {
            setEditedComment(commentToEdit.comments);
            setEditingCommentId(commentId);
        }
    };

    const handleEditComment = async (commentId) => {
        try {
            const res = await Api.patch(`/edit_review/${commentId}/`, { comments: editedComment });
            const updatedReview = res.data; // Assuming the API returns the updated review

            // Update the reviews state with the updated review
            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review.id === updatedReview.id ? updatedReview : review
                )
            );

            // Clear the edited comment and stop editing
            setEditedComment("");
            setEditingCommentId(null);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLike = async () => {
        try {
            const res = await Api.post(`/likes/${detailCard.id}/`);
            // Toggle the user's like status
            console.log(res)
            setLikeIconClass((prevClass) => (prevClass === 'liked' ? 'like-icon' : 'liked'));
            setTotalLikes((prevLikes) => (userHasLiked ? prevLikes - 1 : prevLikes + 1));
        } catch (error) {
            console.log(error);
        }
        handleRefresh();
    };

    const deleteReview = async (id) => {
        try {
            const res = await Api.delete(`/del_review/${id}/`);
            // Remove the deleted comment from the reviews list
            console.log(res)
            const updatedReviews = reviews.filter((review) => review.id !== id);
            setReviews(updatedReviews);
        } catch (error) {
            console.log(error);
        }
    };

    const [doReview, setReview] = useState({
        user: loggedInUser.id,
        product: detailCard.id,
        comments: "",
    });

    const handleComment = (e) => {
        e.preventDefault();
        setReview({
            user: loggedInUser.id,
            product: detailCard.id,
            comments: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Api.post(`post_review/${detailCard.id}/`, doReview);
            const newReview = response.data; // Assuming the API returns the newly created review

            // Update the reviews state with the new review
            setReviews((prevReviews) => [...prevReviews, newReview]);

            // Clear the input field
            setReview({
                user: loggedInUser.id,
                product: detailCard.id,
                comments: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="detail-main">
                                <div className="detail-image">
                                    <img src={detailCard.image} alt="" />
                                </div>
                                <div className="detail-content">
                                    <p className="detail-title">
                                        {detailCard.name}
                                    </p>
                                    <p className="detail-likes">
                                        <FontAwesomeIcon icon={faHeart} className={likeIconClass} id='like-icon' onClick={handleLike} />
                                        {totalLikes}
                                    </p>
                                </div>
                            </div>

                            <div className="review-comment">
                                <input type="text" value={doReview.comments} onChange={handleComment} placeholder='Comment Here' />
                                <FontAwesomeIcon icon={faPaperPlane} onClick={handleSubmit} id='send-button' />
                            </div>

                            <div className="detail-reviews">
                                {reviews.map((e, index) => (
                                    <div className="comment-bar" key={index} >
                                        <img src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=" alt="" id='comment-image' />
                                        <p className="comment-user">
                                            {e.user_name}
                                            {loggedInUser.id === e.user && editingCommentId !== e.id && (
                                                <button onClick={() => startEditingComment(e.id)}>
                                                    <FontAwesomeIcon icon={faPenToSquare} id='review-edit' color='skyblue' />
                                                </button>
                                            )}
                                            {loggedInUser.id === e.user ? <FontAwesomeIcon icon={faTrash} id='review-edit' onClick={() => deleteReview(e.id)} color='red' /> : ''}
                                        </p>
                                        {editingCommentId === e.id ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editedComment}
                                                    onChange={(event) => setEditedComment(event.target.value)}
                                                />
                                                <button onClick={() => handleEditComment(e.id)}>Save</button>
                                            </div>
                                        ) : (
                                            <p className="comment-comment">
                                                {e.comments}
                                            </p>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailCard;
