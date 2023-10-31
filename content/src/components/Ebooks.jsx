import '../styles/components/ebooks.scss';

import { ebooksList } from '../data/ebooksList';

function Ebooks() {
  return (
    <section id='ebooks' className='content_area'>
      <h2>E-Books</h2>
      <article className='ebooks__container'>
        {ebooksList && ebooksList.map((ebook, index) => (
          <div key={index}>
            <h3>{ebook.title}</h3>
            <img src="" alt="ebook image" />
            <p className="ebooks__descryption">{ebook.descryption}</p>
            <a className="ebooks__download" href={ebook.urlDownload}>Download</a>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Ebooks;
