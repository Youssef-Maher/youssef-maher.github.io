document.addEventListener("DOMContentLoaded", () => {
  // كود فرز وتصفية المشاريع التفاعلي في صفحة معرض الأعمال
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // إزالة الحالة النشطة من بقية الأزرار
        filterButtons.forEach((btn) => {
          btn.classList.remove("btn-primary-blue", "active");
          btn.classList.add("btn-outline-secondary");
        });
        // إضافة الحالة النشطة للزر المختار
        button.classList.remove("btn-outline-secondary");
        button.classList.add("btn-primary-blue", "active");

        const filterValue = button.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          if (
            filterValue === "all" ||
            item.getAttribute("data-category") === filterValue
          ) {
            item.style.display = "block";
            item.style.animation = "fadeIn 0.4s ease forwards";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});
