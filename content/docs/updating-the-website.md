---
title: Updating the Website
summary: How to add publications and other content to the lab's website.
date: 2020-06-07T05:44:05.000Z
menu:
  docs:
    parent: Website
    weight: 2
draft: false
toc: true
type: docs
linktitle: Updating the Website
---

{{< alert warning >}}
Before running any of the following, ensure that you have both `docker` and
`docker-compose` installed on your computer.

Additionally, you should also have an **up-to-date local copy of the website**.
If you don't, check out the website's [`README`][readme] for more.

[readme]: https://github.com/ionlights/cocodev.org/blob/master/readme.md

{{< /alert >}}

<a id="new-pubs"> </a>

## Adding Publications to the Website
1. Edit the `static/bibtex/cocodev.bib` by appending your publication. Make sure
   you create a sensible name for the ID &ndash; e.g. `ullman2017mindgames`.
1. Next, run:
   ```bash
   $ ./hugo new-pub -d publication -f static/bibtex/cocodev.bib
   ```
   You just updated the lab's collective `bibtex` with your new publication.
   (Congrats on that, by the way! :tada:) 
1. It's recommended you take a look at the created entries and make fine-tuned
   edits to them – like linking code repository, data, adding a local copy of
   the PDF if permissable, etc.
1. **Now to upstream your changes:** push your changes back to the website's
  repository, and you should see updates on the website within the next 5-10
  minutes.

[webrepo]: https://github.com/ionlights/cocodev.org

<a id="new-content"></a>

## Creating a post, project, or talk

The website is almost entirely derived from [`hugo-academic`][academic], with
slight modifications. Take a look through their documentation on "Creating
Content" to learn more about the ideal ways of adding new material.

**However**, note that all `hugo` commands in their documentation should be
replaced with `./hugo` to utilize the `docker` container that ships with the
website (this guarantees reproducible results for everyone).

[academic]: https://sourcethemes.com/academic