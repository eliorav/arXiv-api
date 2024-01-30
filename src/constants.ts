export const PREFIXES = {
  ALL: "all",
  TI: "ti", // Title
  AU: "au", // Author
  ABS: "abs", // Abstract
  CO: "co", // Comment
  JR: "jr", // Journal Reference
  CAT: "cat", // Subject Category
  RN: "rn", // Report Number
};

export const SEPARATORS = {
  AND: "+AND+",
  OR: "+OR+",
  ANDNOT: "+ANDNOT+",
};

export const SORT_BY = {
  RELEVANCE: "relevance",
  LAST_UPDATED_DATE: "lastUpdatedDate",
  SUBMITTED_DATE: "submittedDate",
};

export const SORT_ORDER = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

export const XML_DATA = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<feed xmlns=\"http://www.w3.org/2005/Atom\">\n" +
    "  <link href=\"http://arxiv.org/api/query?search_query%3Dall%3AGAN%26id_list%3D%26start%3D0%26max_results%3D10\" rel=\"self\" type=\"application/atom+xml\"/>\n" +
    "  <title type=\"html\">ArXiv Query: search_query=all:GAN&amp;id_list=&amp;start=0&amp;max_results=10</title>\n" +
    "  <id>http://arxiv.org/api/cE0tHbIG2iTFLpUuDIBH69wb0m4</id>\n" +
    "  <updated>2024-01-22T00:00:00-05:00</updated>\n" +
    "  <opensearch:totalResults xmlns:opensearch=\"http://a9.com/-/spec/opensearch/1.1/\">10468</opensearch:totalResults>\n" +
    "  <opensearch:startIndex xmlns:opensearch=\"http://a9.com/-/spec/opensearch/1.1/\">0</opensearch:startIndex>\n" +
    "  <opensearch:itemsPerPage xmlns:opensearch=\"http://a9.com/-/spec/opensearch/1.1/\">10</opensearch:itemsPerPage>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2111.13282v1</id>\n" +
    "    <updated>2021-11-26T00:45:08Z</updated>\n" +
    "    <published>2021-11-26T00:45:08Z</published>\n" +
    "    <title>Generative Adversarial Networks and Adversarial Autoencoders: Tutorial\n" +
    "  and Survey</title>\n" +
    "    <summary>  This is a tutorial and survey paper on Generative Adversarial Network (GAN),\n" +
    "adversarial autoencoders, and their variants. We start with explaining\n" +
    "adversarial learning and the vanilla GAN. Then, we explain the conditional GAN\n" +
    "and DCGAN. The mode collapse problem is introduced and various methods,\n" +
    "including minibatch GAN, unrolled GAN, BourGAN, mixture GAN, D2GAN, and\n" +
    "Wasserstein GAN, are introduced for resolving this problem. Then, maximum\n" +
    "likelihood estimation in GAN are explained along with f-GAN, adversarial\n" +
    "variational Bayes, and Bayesian GAN. Then, we cover feature matching in GAN,\n" +
    "InfoGAN, GRAN, LSGAN, energy-based GAN, CatGAN, MMD GAN, LapGAN, progressive\n" +
    "GAN, triple GAN, LAG, GMAN, AdaGAN, CoGAN, inverse GAN, BiGAN, ALI, SAGAN,\n" +
    "Few-shot GAN, SinGAN, and interpolation and evaluation of GAN. Then, we\n" +
    "introduce some applications of GAN such as image-to-image translation\n" +
    "(including PatchGAN, CycleGAN, DeepFaceDrawing, simulated GAN, interactive\n" +
    "GAN), text-to-image translation (including StackGAN), and mixing image\n" +
    "characteristics (including FineGAN and MixNMatch). Finally, we explain the\n" +
    "autoencoders based on adversarial learning including adversarial autoencoder,\n" +
    "PixelGAN, and implicit autoencoder.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Benyamin Ghojogh</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Ali Ghodsi</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Fakhri Karray</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Mark Crowley</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">To appear as a part of an upcoming textbook on dimensionality\n" +
    "  reduction and manifold learning</arxiv:comment>\n" +
    "    <link href=\"http://arxiv.org/abs/2111.13282v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2111.13282v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"eess.IV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"stat.ML\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/1904.00724v1</id>\n" +
    "    <updated>2019-04-01T12:19:28Z</updated>\n" +
    "    <published>2019-04-01T12:19:28Z</published>\n" +
    "    <title>GAN You Do the GAN GAN?</title>\n" +
    "    <summary>  Generative Adversarial Networks (GANs) have become a dominant class of\n" +
    "generative models. In recent years, GAN variants have yielded especially\n" +
    "impressive results in the synthesis of a variety of forms of data. Examples\n" +
    "include compelling natural and artistic images, textures, musical sequences,\n" +
    "and 3D object files. However, one obvious synthesis candidate is missing. In\n" +
    "this work, we answer one of deep learning's most pressing questions: GAN you do\n" +
    "the GAN GAN? That is, is it possible to train a GAN to model a distribution of\n" +
    "GANs? We release the full source code for this project under the MIT license.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Joseph Suarez</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">3 pages</arxiv:comment>\n" +
    "    <link href=\"http://arxiv.org/abs/1904.00724v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/1904.00724v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2303.15533v1</id>\n" +
    "    <updated>2023-03-27T18:18:15Z</updated>\n" +
    "    <published>2023-03-27T18:18:15Z</published>\n" +
    "    <title>Sequential training of GANs against GAN-classifiers reveals correlated\n" +
    "  \"knowledge gaps\" present among independently trained GAN instances</title>\n" +
    "    <summary>  Modern Generative Adversarial Networks (GANs) generate realistic images\n" +
    "remarkably well. Previous work has demonstrated the feasibility of\n" +
    "\"GAN-classifiers\" that are distinct from the co-trained discriminator, and\n" +
    "operate on images generated from a frozen GAN. That such classifiers work at\n" +
    "all affirms the existence of \"knowledge gaps\" (out-of-distribution artifacts\n" +
    "across samples) present in GAN training. We iteratively train GAN-classifiers\n" +
    "and train GANs that \"fool\" the classifiers (in an attempt to fill the knowledge\n" +
    "gaps), and examine the effect on GAN training dynamics, output quality, and\n" +
    "GAN-classifier generalization. We investigate two settings, a small DCGAN\n" +
    "architecture trained on low dimensional images (MNIST), and StyleGAN2, a SOTA\n" +
    "GAN architecture trained on high dimensional images (FFHQ). We find that the\n" +
    "DCGAN is unable to effectively fool a held-out GAN-classifier without\n" +
    "compromising the output quality. However, StyleGAN2 can fool held-out\n" +
    "classifiers with no change in output quality, and this effect persists over\n" +
    "multiple rounds of GAN/classifier training which appears to reveal an ordering\n" +
    "over optima in the generator parameter space. Finally, we study different\n" +
    "classifier architectures and show that the architecture of the GAN-classifier\n" +
    "has a strong influence on the set of its learned artifacts.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Arkanath Pathak</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Nicholas Dufour</name>\n" +
    "    </author>\n" +
    "    <link href=\"http://arxiv.org/abs/2303.15533v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2303.15533v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2003.08047v1</id>\n" +
    "    <updated>2020-03-18T05:14:51Z</updated>\n" +
    "    <published>2020-03-18T05:14:51Z</published>\n" +
    "    <title>Capsule GAN Using Capsule Network for Generator Architecture</title>\n" +
    "    <summary>  This paper presents Capsule GAN, a Generative adversarial network using\n" +
    "Capsule Network not only in the discriminator but also in the generator.\n" +
    "Recently, Generative adversarial networks (GANs) has been intensively studied.\n" +
    "However, generating images by GANs is difficult. Therefore, GANs sometimes\n" +
    "generate poor quality images. These GANs use convolutional neural networks\n" +
    "(CNNs). However, CNNs have the defect that the relational information between\n" +
    "features of the image may be lost. Capsule Network, proposed by Hinton in 2017,\n" +
    "overcomes the defect of CNNs. Capsule GAN reported previously uses Capsule\n" +
    "Network in the discriminator. However, instead of using Capsule Network,\n" +
    "Capsule GAN reported in previous studies uses CNNs in generator architecture\n" +
    "like DCGAN. This paper introduces two approaches to use Capsule Network in the\n" +
    "generator. One is to use DigitCaps layer from the discriminator as the input to\n" +
    "the generator. DigitCaps layer is the output layer of Capsule Network. It has\n" +
    "the features of the input images of the discriminator. The other is to use the\n" +
    "reverse operation of recognition process in Capsule Network in the generator.\n" +
    "We compare Capsule GAN proposed in this paper with conventional GAN using CNN\n" +
    "and Capsule GAN which uses Capsule Network in the discriminator only. The\n" +
    "datasets are MNIST, Fashion-MNIST and color images. We show that Capsule GAN\n" +
    "outperforms the GAN using CNN and the GAN using Capsule Network in the\n" +
    "discriminator only. The architecture of Capsule GAN proposed in this paper is a\n" +
    "basic architecture using Capsule Network. Therefore, we can apply the existing\n" +
    "improvement techniques for GANs to Capsule GAN.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Kanako Marusaki</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Hiroshi Watanabe</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">7 pages and 8 figures</arxiv:comment>\n" +
    "    <link href=\"http://arxiv.org/abs/2003.08047v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2003.08047v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"eess.IV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"68T05\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/1701.06264v6</id>\n" +
    "    <updated>2018-03-19T03:54:50Z</updated>\n" +
    "    <published>2017-01-23T04:46:22Z</published>\n" +
    "    <title>Loss-Sensitive Generative Adversarial Networks on Lipschitz Densities</title>\n" +
    "    <summary>  In this paper, we present the Lipschitz regularization theory and algorithms\n" +
    "for a novel Loss-Sensitive Generative Adversarial Network (LS-GAN).\n" +
    "Specifically, it trains a loss function to distinguish between real and fake\n" +
    "samples by designated margins, while learning a generator alternately to\n" +
    "produce realistic samples by minimizing their losses. The LS-GAN further\n" +
    "regularizes its loss function with a Lipschitz regularity condition on the\n" +
    "density of real data, yielding a regularized model that can better generalize\n" +
    "to produce new data from a reasonable number of training examples than the\n" +
    "classic GAN. We will further present a Generalized LS-GAN (GLS-GAN) and show it\n" +
    "contains a large family of regularized GAN models, including both LS-GAN and\n" +
    "Wasserstein GAN, as its special cases. Compared with the other GAN models, we\n" +
    "will conduct experiments to show both LS-GAN and GLS-GAN exhibit competitive\n" +
    "ability in generating new images in terms of the Minimum Reconstruction Error\n" +
    "(MRE) assessed on a separate test set. We further extend the LS-GAN to a\n" +
    "conditional form for supervised and semi-supervised learning problems, and\n" +
    "demonstrate its outstanding performance on image classification tasks.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Guo-Jun Qi</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">The source codes for both LS-GAN and GLS-GAN are available at\n" +
    "  \\url{https://github.com/maple-research-lab}. LS-GAN is also supported by\n" +
    "  Microsoft CNTK at\n" +
    "  \\url{https://www.cntk.ai/pythondocs/CNTK_206C_WGAN_LSGAN.html}. The original\n" +
    "  codes of LS-GAN and GLS-GAN are also available at\n" +
    "  https://github.com/guojunq/lsgan/ and https://github.com/guojunq/glsgan/</arxiv:comment>\n" +
    "    <arxiv:journal_ref xmlns:arxiv=\"http://arxiv.org/schemas/atom\">in International Journal of Computer Vision (IJCV), 2019</arxiv:journal_ref>\n" +
    "    <link href=\"http://arxiv.org/abs/1701.06264v6\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/1701.06264v6\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2307.16275v1</id>\n" +
    "    <updated>2023-07-30T17:05:22Z</updated>\n" +
    "    <published>2023-07-30T17:05:22Z</published>\n" +
    "    <title>Stylized Projected GAN: A Novel Architecture for Fast and Realistic\n" +
    "  Image Generation</title>\n" +
    "    <summary>  Generative Adversarial Networks are used for generating the data using a\n" +
    "generator and a discriminator, GANs usually produce high-quality images, but\n" +
    "training GANs in an adversarial setting is a difficult task. GANs require high\n" +
    "computation power and hyper-parameter regularization for converging. Projected\n" +
    "GANs tackle the training difficulty of GANs by using transfer learning to\n" +
    "project the generated and real samples into a pre-trained feature space.\n" +
    "Projected GANs improve the training time and convergence but produce artifacts\n" +
    "in the generated images which reduce the quality of the generated samples, we\n" +
    "propose an optimized architecture called Stylized Projected GANs which\n" +
    "integrates the mapping network of the Style GANs with Skip Layer Excitation of\n" +
    "Fast GAN. The integrated modules are incorporated within the generator\n" +
    "architecture of the Fast GAN to mitigate the problem of artifacts in the\n" +
    "generated images.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Md Nurul Muttakin</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Malik Shahid Sultan</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Robert Hoehndorf</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Hernando Ombao</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">We present a new architecture for generating realistic images by\n" +
    "  combining mapping network of Style GANs and Projected GANs</arxiv:comment>\n" +
    "    <link href=\"http://arxiv.org/abs/2307.16275v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2307.16275v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2002.02112v1</id>\n" +
    "    <updated>2020-02-06T06:03:04Z</updated>\n" +
    "    <published>2020-02-06T06:03:04Z</published>\n" +
    "    <title>Unbalanced GANs: Pre-training the Generator of Generative Adversarial\n" +
    "  Network using Variational Autoencoder</title>\n" +
    "    <summary>  We propose Unbalanced GANs, which pre-trains the generator of the generative\n" +
    "adversarial network (GAN) using variational autoencoder (VAE). We guarantee the\n" +
    "stable training of the generator by preventing the faster convergence of the\n" +
    "discriminator at early epochs. Furthermore, we balance between the generator\n" +
    "and the discriminator at early epochs and thus maintain the stabilized training\n" +
    "of GANs. We apply Unbalanced GANs to well known public datasets and find that\n" +
    "Unbalanced GANs reduce mode collapses. We also show that Unbalanced GANs\n" +
    "outperform ordinary GANs in terms of stabilized learning, faster convergence\n" +
    "and better image quality at early epochs.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Hyungrok Ham</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Tae Joon Jun</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Daeyoung Kim</name>\n" +
    "    </author>\n" +
    "    <link href=\"http://arxiv.org/abs/2002.02112v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2002.02112v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.CV\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"stat.ML\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/1904.08994v1</id>\n" +
    "    <updated>2019-04-18T20:15:08Z</updated>\n" +
    "    <published>2019-04-18T20:15:08Z</published>\n" +
    "    <title>From GAN to WGAN</title>\n" +
    "    <summary>  This paper explains the math behind a generative adversarial network (GAN)\n" +
    "model and why it is hard to be trained. Wasserstein GAN is intended to improve\n" +
    "GANs' training by adopting a smooth metric for measuring the distance between\n" +
    "two probability distributions.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Lilian Weng</name>\n" +
    "    </author>\n" +
    "    <arxiv:comment xmlns:arxiv=\"http://arxiv.org/schemas/atom\">12 pages, 9 figures</arxiv:comment>\n" +
    "    <link href=\"http://arxiv.org/abs/1904.08994v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/1904.08994v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"stat.ML\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/2104.01437v1</id>\n" +
    "    <updated>2021-04-03T16:06:30Z</updated>\n" +
    "    <published>2021-04-03T16:06:30Z</published>\n" +
    "    <title>Monte Carlo Simulation of SDEs using GANs</title>\n" +
    "    <summary>  Generative adversarial networks (GANs) have shown promising results when\n" +
    "applied on partial differential equations and financial time series generation.\n" +
    "We investigate if GANs can also be used to approximate one-dimensional Ito\n" +
    "stochastic differential equations (SDEs). We propose a scheme that approximates\n" +
    "the path-wise conditional distribution of SDEs for large time steps. Standard\n" +
    "GANs are only able to approximate processes in distribution, yielding a weak\n" +
    "approximation to the SDE. A conditional GAN architecture is proposed that\n" +
    "enables strong approximation. We inform the discriminator of this GAN with the\n" +
    "map between the prior input to the generator and the corresponding output\n" +
    "samples, i.e. we introduce a `supervised GAN'. We compare the input-output map\n" +
    "obtained with the standard GAN and supervised GAN and show experimentally that\n" +
    "the standard GAN may fail to provide a path-wise approximation. The GAN is\n" +
    "trained on a dataset obtained with exact simulation. The architecture was\n" +
    "tested on geometric Brownian motion (GBM) and the Cox-Ingersoll-Ross (CIR)\n" +
    "process. The supervised GAN outperformed the Euler and Milstein schemes in\n" +
    "strong error on a discretisation with large time steps. It also outperformed\n" +
    "the standard conditional GAN when approximating the conditional distribution.\n" +
    "We also demonstrate how standard GANs may give rise to non-parsimonious\n" +
    "input-output maps that are sensitive to perturbations, which motivates the need\n" +
    "for constraints and regularisation on GAN generators.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Jorino van Rhijn</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Cornelis W. Oosterlee</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Lech A. Grzelak</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Shuaiqiang Liu</name>\n" +
    "    </author>\n" +
    "    <link href=\"http://arxiv.org/abs/2104.01437v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/2104.01437v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.LG\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cs.NA\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"math.NA\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"q-fin.CP\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "  <entry>\n" +
    "    <id>http://arxiv.org/abs/1611.08337v1</id>\n" +
    "    <updated>2016-11-25T02:16:57Z</updated>\n" +
    "    <published>2016-11-25T02:16:57Z</published>\n" +
    "    <title>\"WM\"-Shaped Growth of GaN on Patterned Sapphire Substrates</title>\n" +
    "    <summary>  In metal organic vapor phase epitaxy of GaN, the growth mode is sensitive to\n" +
    "reactor temperature. In this study, V-pit-shaped GaN has been grown on normal\n" +
    "c-plane cone-patterned sapphire substrate by decreasing the growth temperature\n" +
    "of high-temperature-GaN to around 950 oC, which leads to the 3-dimensional\n" +
    "growth of GaN. The so-called \"WM\" well describes the shape that the bottom of\n" +
    "GaN V-pit is just right over the top of sapphire cone, and the regular\n" +
    "arrangement of V-pits follows the patterns of sapphire substrate strictly. Two\n" +
    "types of semipolar facets (1101) and (1122) expose on sidewalls of V-pits.\n" +
    "Furthermore, by raising the growth temperature to 1000 oC, the growth mode of\n" +
    "GaN can be transferred to 2-demonsional growth. Accordingly, the size of V-pits\n" +
    "becomes smaller and the area of c-plane GaN becomes larger, while the total\n" +
    "thickness of GaN keeps almost unchanged during this process. As long as the\n" +
    "2-demonsional growth lasts, the V-pits will disappear and only flat c-plane GaN\n" +
    "remains. This means the area ratio of c-plane and semipolar plane GaN can be\n" +
    "controlled by the duration time of 2-demonsional growth.\n" +
    "</summary>\n" +
    "    <author>\n" +
    "      <name>Lai Wang</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Xiao Meng</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Di Yang</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Zhibiao Hao</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Yi Luo</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Changzheng Sun</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Yanjun Han</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Bing Xiong</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Jian Wang</name>\n" +
    "    </author>\n" +
    "    <author>\n" +
    "      <name>Hongtao Li</name>\n" +
    "    </author>\n" +
    "    <link href=\"http://arxiv.org/abs/1611.08337v1\" rel=\"alternate\" type=\"text/html\"/>\n" +
    "    <link title=\"pdf\" href=\"http://arxiv.org/pdf/1611.08337v1\" rel=\"related\" type=\"application/pdf\"/>\n" +
    "    <arxiv:primary_category xmlns:arxiv=\"http://arxiv.org/schemas/atom\" term=\"cond-mat.mtrl-sci\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "    <category term=\"cond-mat.mtrl-sci\" scheme=\"http://arxiv.org/schemas/atom\"/>\n" +
    "  </entry>\n" +
    "</feed>"