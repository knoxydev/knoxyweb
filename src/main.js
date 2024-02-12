const menu = (x) =>
{
	const div = document.createElement('ul');
	const items = [
		{ name : "About me", link : "../pages/main.html", },
		{ name : "Projects", link : "../pages/projects.html", },
		{ name : "Donation", link : "../pages/donation.html", },
		{ name : "Photos", link : "../pages/photos.html", },
		{ name : "Movies", link : "../pages/movies.html", },
		{ name : "Blog", link : "../pages/blog.html", },
		{ name : "Apps", link : "../pages/apps.html",},
		{ name : "Walls", link : "../pages/wallpapers.html", } ];

	items.forEach((elm, idx) =>
	{
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.setAttribute("href", elm.link);

		if (x == (idx + 1)) {
			let span = document.createElement('span');
			span.innerHTML = `• ${elm.name}`;
			span.setAttribute("id", "selected_tab");
			a.append(span);
		} else a.innerHTML = elm.name;

		li.append(a);
		div.append(li);
	});

	document.getElementById("menu-block").append(div);
}

