// const get_time = () =>
// {
// 	const get_info = (x) =>
// 	{
// 		const year = x.getFullYear();
// 		const month = (x.getMonth() + 1).toString().padStart(2, '0');
// 		const day = x.getDate().toString().padStart(2, '0');
// 	  const hours = x.getHours().toString().padStart(2, '0');
// 	  const minutes = x.getMinutes().toString().padStart(2, '0');

// 	  return `${day}-${month}-${year} / ${hours}:${minutes}`;
// 	};
	
// 	const current_time = new Date();
//   const local_offset = current_time.getTimezoneOffset() * 60000;
//   const target_offset = 5 * 3600000;
//   const date = new Date(current_time.getTime() + target_offset + local_offset);

// 	document.getElementById("local_time").innerHTML = get_info(date);
// };


const menu = (x) =>
{
	// if (x == 1) get_time(); 

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
