---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Modeling Expectation Violation in Intuitive Physics with Coarse Probabilistic Object Representations"
authors:
- Kevin Smith*
- Lingjie Mai*
- Shunyu Yao*
- Jiajun Wu
- Elizabeth Spelke
- Joshua Tenenbaum
- tomer-ullman
date: 2019-12-08T00:00:00Z
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-12-08T00:00:00Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Advances in Neural Information Processing Systems"
publication_short: "NeurIPS 2019"

abstract: >-
  From infancy, humans have expectations about how objects will move and
  interact. Even young children expect objects not to move through one another,
  teleport, or disappear. They are surprised by mismatches between physical
  expectations and perceptual observations, even in unfamiliar scenes with 
  completely novel objects. A model that exhibits human-like understanding of
  physics should be similarly surprised, and adjust its beliefs accordingly.
  We propose ADEPT, a model that uses a coarse (approximate geometry)
  object-centric representation for dynamic 3D scene understanding. Inference
  integrates deep recognition networks, extended probabilistic physical 
  simulation, and particle filtering for forming predictions and expectations
  across occlusion. We also present a new test set for measuring violations of
  physical expectations, using a range of scenarios derived from developmental
  psychology. We systematically compare ADEPT, baseline models, and human
  expectations on this test set. ADEPT outperforms standard network 
  architectures in discriminating physically implausible scenes, and often
  performs this discrimination at the same level as people. We will release all
  code and data.

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Conference Listing
  url: https://papers.nips.cc/paper/9100-modeling-expectation-violation-in-intuitive-physics-with-coarse-probabilistic-object-representations
  icon_pack: fas
  icon: book

url_pdf: 
url_code: https://github.com/JerryLingjieMei/ADEPT-Model-Release
url_dataset:
url_poster:
url_project: http://physadept.csail.mit.edu/
url_slides:
url_source: 
url_video: https://www.youtube.com/watch?v=95HlF9nCca4/

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
