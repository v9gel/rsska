import axios from 'axios';
import {
  Anchor, Box, Button, Header, Heading, PageHeader, Spinner,
} from 'grommet/components';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

interface IArticle {
  title: string;
  description: string;
  channel_info: {
    title: string;
  }
}

export const Home = observer(() => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    axios('/news').then((articlesFromApi) => {
      setArticles(articlesFromApi as unknown as IArticle[]);
    });
  }, []);

  return (
    <>
      {!articles.length && <Spinner />}
      {
        articles.map((article, index) => (
          <Box responsive key={article.title}>
            <Heading>{article.title}</Heading>
            <Anchor label={article.channel_info.title} />
            <div dangerouslySetInnerHTML={{ __html: article.description }} />
          </Box>
        ))
        }
    </>
  );
});
