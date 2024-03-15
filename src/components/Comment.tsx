import { useEffect, useRef } from 'react';
import { useUserContext } from '../hooks/ContextHooks';
import { useForm } from '../hooks/formHooks';

import { MediaItemWithOwner } from '../types/DBTypes';
import { useComment } from '../hooks/graphQLHooks';


const Comments = ({ item }: { item: MediaItemWithOwner }) => {

  const { user } = useUserContext();
  const formRef = useRef<HTMLFormElement>(null);
  const { getCommentsByMediaId, postComment } = useComment();

  const initValues = { comment_text: '' };

  const doComment = async () => {
    const token = localStorage.getItem('token');
    if (!user || !token) {
      return;
    }
    try {
      await postComment(inputs.comment_text, Number(item.media_id), token);
      await getComments();
      // resetoi lomake
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('postComment failed', error);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doComment,
    initValues,
  );

